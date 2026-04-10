#!/usr/bin/env python3
"""Rewrite the SpanishVivo index.html replacing QUESTION_BANK with VOCAB_DB."""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')

print(f"Total lines: {len(lines)}")

# Find key markers
for i, line in enumerate(lines):
    if '// ── Hardcoded question bank' in line:
        print(f"QUESTION_BANK comment: line {i+1}")
    if 'const QUESTION_BANK' in line:
        print(f"QUESTION_BANK start: line {i+1}")
    if 'async function generateLesson' in line:
        print(f"generateLesson: line {i+1}")
    if '// ═══════════════════════════════════════════════' in line and i > 483 and i < 490:
        print(f"After generateLesson separator: line {i+1}")

