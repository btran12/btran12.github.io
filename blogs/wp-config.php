<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u604891846_uruzu' );

/** MySQL database username */
define( 'DB_USER', 'u604891846_uvylu' );

/** MySQL database password */
define( 'DB_PASSWORD', 'adaJemaTeh' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'R5=P;6CE+n)&NuI%k>4T6==6-:pHmfv1v>~AQj:nFITk3:>*oNmS-q1Qg?/,*k&b' );
define( 'SECURE_AUTH_KEY',   '&p`%]f)f|>1K%!7`uN:Zu*y6tK(2Z?L!eeP<SgFXDymczduBuXN(pF;zbDtBJSD/' );
define( 'LOGGED_IN_KEY',     'Jw1U9Mcm6fTJZO^(mzX=V{?I0Ay`1J&jawO!*Ce|6w}6p6&t)-cSP$Eq5$Vx>Of#' );
define( 'NONCE_KEY',         'o%O[,.|bZ?Ygt#YuHJg6<)3X7Wf[hKoI0 :O+o1cw(kBUr*l!CV>m{ %IVYpl7  ' );
define( 'AUTH_SALT',         'lmF}#X@bv7/lOt5natK:7<Z*P.c*Y&MOS|MMxA4l]0pb{]r3wnTwXt|N4 gLL>&^' );
define( 'SECURE_AUTH_SALT',  '(~(&u4Iobg67^fM;0HNa0DSux*Z6zE@-t8!qOwYcap2KT~;.18cb/,6>*z#jzeh:' );
define( 'LOGGED_IN_SALT',    'LH{ux;c]Luxy6i@= 5jXt6t{$/bwGDwm;*fg{.csS3-nscj7>R&D`:PJ]UHEHLXU' );
define( 'NONCE_SALT',        '0#.ouXHY}cf5gXf}&t+fz*hX-fYXIb?ep{eYCzhph;j4k?xd6CN (/j)u@33$5R&' );
define( 'WP_CACHE_KEY_SALT', '4fJ}08aE7v.TD^^Db80s1lf^<R[/bVhqqPe(uAIFc,j*3*W<Bk8/+_%tE&6^oQR-' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




define( 'FS_METHOD', 'direct' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
