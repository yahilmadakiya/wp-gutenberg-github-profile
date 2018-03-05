/**
 * Creates RichText block.
 */
const { __ } = wp.i18n;
const { registerBlockType, source: { children } } = wp.blocks;
import Profile from './profile.js';

const blockAttr = {
	inputString: {
		type: 'text',
		selector: 'p'
	},
	title: {
		type: 'text',
		selector: 'h3'
	},
	url: {
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	}
};

registerBlockType( 'rt-blocks/rt-editable-block001', {
	title: __( 'RT Editable Block' ),
	icon: 'universal-access-alt',
	category: 'common',
	attributes: blockAttr,
	edit: Profile,
	save: props => {
		const title   = props.attributes.title ? props.attributes.title : '';
		const url     = props.attributes.url ? props.attributes.url : '';
		return (
			<div>
				<h3>{ title }</h3>
				<div>
					<img src={ url } />	
				</div>
			</div>
		);
	}
} );
