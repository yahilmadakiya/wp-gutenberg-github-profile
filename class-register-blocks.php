<?php
/**
 * Register plugin blocks
 *
 * @package rtBlocks
 */

namespace rtBlocks\Gutenblocks;

/**
 * Class Register_Blocks
 *
 * @package rtBlocks\Gutenblocks
 */
class Register_Blocks {

	use \rtBlocks\Traits\Singleton;

	/**
	 * Initialize Block.
	 */
	protected function init() {
		add_action( 'init', array( $this, 'register_sample_block' ) );
	}

	/**
	 * Register gutenberg lyrics block
	 */
	public function register_sample_block() {
		wp_enqueue_script(
			'gutenberg-sample-block',
			RT_BLOCKS_DIR_URL . 'blocks/build/build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
			RT_BLOCKS_DIR_URL
		);
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
