<?php
/**
 * Register plugin blocks
 *
 * @package WP_Github_User
 */

namespace WP_Github_User\Gutenblocks;

/**
 * Class Register_Blocks
 *
 * @package WP_Github_User\Gutenblocks
 */
class Register_Blocks {

	use \WP_Github_User\Traits\Singleton;

	/**
	 * Initialize Block.
	 */
	protected function init() {
		add_action( 'init', array( $this, 'register_sample_block' ) );
	}

	/**
	 * Register gutenberg GITHUB block
	 */
	public function register_sample_block() {
		wp_enqueue_script(
			'gutenberg-sample-block',
			WP_GITHUB_USER_URL . 'blocks/build/build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
			WP_GITHUB_USER_VER
		);
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
