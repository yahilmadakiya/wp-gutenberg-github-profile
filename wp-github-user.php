<?php
/**
 * Plugin Name: WP Github User
 * Description: Simple Gutenberg Boilerplate for plugin development
 * Author: rtCamp, sagarkbhatt, sayed, utkarsh
 * Author URI: https://rtcamp.com/
 * Version: 0.1
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: rt-blocks
 *
 * @package WP_Github_User
 */

if ( ! defined( 'WP_GITHUB_USER_VER' ) ) {
	define( 'WP_GITHUB_USER_VER', '0.1' );
}

if ( ! defined( 'WP_GITHUB_USER_DIR' ) ) {
	define( 'WP_GITHUB_USER_DIR', __DIR__ );
}

if ( ! defined( 'WP_GITHUB_USER_URL' ) ) {
	define( 'WP_GITHUB_USER_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

require_once WP_GITHUB_USER_DIR . '/trait-singleton.php';
require_once WP_GITHUB_USER_DIR . '/class-register-blocks.php';
