<?php
/**
 * Plugin Name: WP Github User
 * Description: Simple Gutenberg Block to fetch user data from github.
 * Author: Yahil
 * Author URI: http://yahilmadakiya.github.io/
 * Version: 1.0
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: WP_Github_User
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
