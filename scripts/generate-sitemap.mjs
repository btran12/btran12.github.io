#!/usr/bin/env node
/**
 * Generate sitemap.xml for https://baoservis.com
 *
 * What it does:
 *   1. Finds public HTML pages in this repository.
 *   2. Adds every GitHub Pages project site that is served under
 *      https://baoservis.com/<repo>/ (for example /voyage/ and /CoPilot/).
 *   3. Adds the standalone demos from the btran12/index repository
 *      (served at https://baoservis.com/index/*.html).
 *   4. Drops anything that is not a 200 response on baoservis.com.
 *
 * Usage:
 *   node scripts/generate-sitemap.mjs
 *   node scripts/generate-sitemap.mjs --local-only
 *   node scripts/generate-sitemap.mjs --dry-run
 *
 * Optional environment variable:
 *   GITHUB_TOKEN  Raises the GitHub API rate limit in CI.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://baoservis.com";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(ROOT, "sitemap.xml");
const GITHUB_USER = "btran12";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const args = new Set(process.argv.slice(2));
const LOCAL_ONLY = args.has("--local-only");
const DRY_RUN = args.has("--dry-run");

/** Directories that should never be published in the sitemap. */
const EXCLUDED_DIRS = new Set([
  ".git",
  ".github",
  "node_modules",
  "blogs", // legacy WordPress install; not executable on GitHub Pages
  "dashboard0", // duplicate of /dashboard/
  "projects/movies-database", // PHP application; cannot run on GitHub Pages
  "applications/news/views", // Angular partial, not a page
]);

/** Individual files that should never be published in the sitemap. */
const EXCLUDED_FILES = new Set([
  "404.html",
  "oldView.html",
  "google92cf0561696f988c.html",
]);

/** Non-HTML files that should still be discoverable. */
const EXTRA_LOCAL_PATHS = ["resume/resume.pdf"];

const xmlEscape = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toPosix = (value) => value.split(sep).join("/");

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const absolute = join(dir, entry.name);
    const rel = toPosix(relative(ROOT, absolute));

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(rel) || EXCLUDED_DIRS.has(entry.name)) continue;
      walk(absolute, files);
      continue;
    }

    if (!entry.isFile()) continue;
    if (EXCLUDED_FILES.has(rel)) continue;
    if (/^google[0-9a-f]+\.html$/i.test(entry.name)) continue;
    if (!/\.html?$/i.test(entry.name)) continue;
    files.push(rel);
  }
  return files;
}

function localUrl(relPath) {
  if (relPath === "index.html") return `${SITE}/`;
  if (relPath.endsWith("/index.html")) {
    return `${SITE}/${relPath.slice(0, -"index.html".length)}`;
  }
  return `${SITE}/${relPath}`;
}

function lastModified(relPath) {
  try {
    const value = execFileSync("git", ["log", "-1", "--format=%cs", "--", relPath], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (value) return value;
  } catch {
    // Not a git checkout or no history for the file.
  }

  try {
    return statSync(join(ROOT, relPath)).mtime.toISOString().slice(0, 10);
  } catch {
    return undefined;
  }
}

async function githubJson(path) {
  try {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": `${GITHUB_USER}-sitemap-generator`,
        ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      },
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) {
      console.warn(`GitHub API ${path} returned ${response.status}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.warn(`GitHub API ${path} failed: ${error.message}`);
    return null;
  }
}

async function isLiveOnCustomDomain(url) {
  const request = async (method, extraHeaders = {}) => {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      headers: {
        "User-Agent": `${GITHUB_USER}-sitemap-generator`,
        ...extraHeaders,
      },
      signal: AbortSignal.timeout(20_000),
    });
    return response;
  };

  try {
    let response = await request("HEAD");
    if (response.status === 405 || response.status === 501) {
      response = await request("GET", { Range: "bytes=0-0" });
    }
    if (!response.ok) return false;
    const finalUrl = new URL(response.url);
    return finalUrl.protocol === "https:" && finalUrl.hostname === "baoservis.com";
  } catch {
    return false;
  }
}

const entries = new Map();

function add(url, lastmod) {
  if (!entries.has(url)) entries.set(url, { url, lastmod });
}

// 1. Pages in this repository.
for (const file of walk(ROOT)) {
  add(localUrl(file), lastModified(file));
}

for (const path of EXTRA_LOCAL_PATHS) {
  if (existsSync(join(ROOT, path))) {
    add(`${SITE}/${path}`, lastModified(path));
  }
}

// 2. GitHub Pages project sites that resolve to baoservis.com.
if (!LOCAL_ONLY) {
  const repos = await githubJson(`/users/${GITHUB_USER}/repos?per_page=100&type=owner`);
  if (Array.isArray(repos)) {
    for (const repo of repos.sort((a, b) => a.name.localeCompare(b.name))) {
      if (!repo.has_pages || repo.archived || repo.fork) continue;
      if (repo.name === `${GITHUB_USER}.github.io`) continue;

      const url = `${SITE}/${repo.name}/`;
      if (await isLiveOnCustomDomain(url)) {
        add(url);
      } else {
        console.log(`skip  ${url} (not a 200 on baoservis.com)`);
      }
    }
  }

  // 3. Standalone demos from the btran12/index repository.
  const indexFiles = await githubJson(`/repos/${GITHUB_USER}/index/contents/`);
  if (Array.isArray(indexFiles)) {
    for (const file of indexFiles) {
      if (file.type !== "file" || !/\.html?$/i.test(file.name)) continue;
      if (file.name.toLowerCase() === "index.html") continue;

      const url = `${SITE}/index/${file.name}`;
      if (await isLiveOnCustomDomain(url)) {
        add(url);
      } else {
        console.log(`skip  ${url} (not a 200 on baoservis.com)`);
      }
    }
  }
}

// Sort: homepage first, then hubs, then everything alphabetically.
const sorted = [...entries.values()].sort((a, b) => {
  if (a.url === `${SITE}/`) return -1;
  if (b.url === `${SITE}/`) return 1;
  return a.url.localeCompare(b.url);
});

const body = sorted
  .map(({ url, lastmod }) => {
    const lines = [`  <url>`, `    <loc>${xmlEscape(url)}</loc>`];
    if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push(`  </url>`);
    return lines.join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

if (DRY_RUN) {
  console.log(xml);
} else {
  const previous = existsSync(OUTPUT) ? readFileSync(OUTPUT, "utf8") : "";
  writeFileSync(OUTPUT, xml, "utf8");
  console.log(`Wrote ${sorted.length} URLs to ${relative(ROOT, OUTPUT)}`);
  if (previous === xml) console.log("sitemap.xml is already up to date");
}
