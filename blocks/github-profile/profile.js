import ReactAutocomplete from 'react-autocomplete';

const { __ } = wp.i18n;
const { Component, bind } = wp.element;

class Profile extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			value: this.props.attributes.title ? this.props.attributes.title : '',
			items: [],
		}

		this.selectEvent     = this.selectEvent.bind( this );
		this.fetchUserData   = this.fetchUserData.bind( this );
		this.fetchSuggestion = this.fetchSuggestion.bind( this );
	}

	fetchSuggestion( e ) {
		const term = e.target.value || '';
		this.setState( {
			value: term
		} );

		// if ( term.length !== 0 ) {
			const _this = this;
			const api   = `https://api.github.com/search/users?q=${term}`;
			console.log( api );
			fetch( api )
				.then( ( response ) => response.json() )
				.then( ( response ) => {
					console.log( response );
					_this.setState( {
						items: response.items ? response.items : []
					} );
					console.log( _this.state.items );
				} )
		// }
	}

	selectEvent( value, item ) {
		this.setState( { value: value } );
		const term = item.login;
		this.props.setAttributes( { inputString: term } );
		this.fetchUserData( term );
	}

	fetchUserData( term ) {
		const api = `https://api.github.com/users/${term}`;

		fetch( api )
			.then( ( response ) => response.json() )
			.then( ( response ) => {
				this.props.setAttributes( {
					title: response.name,
					url: response.avatar_url,
				} );	
			} )
	}

	render() {
		const attributes = this.props.attributes;
		let retVal = [];

		retVal.push(
			<div>
				<h3>Enter Your Github Profile</h3>
				<ReactAutocomplete key={ 'input-autocomplete' }
					items={ this.state.items }
					getItemValue={ item => item.login }
					renderItem={ ( item, isHighlighted ) => (
						<div style={ { background: isHighlighted ? 'lightgray' : 'white' } } key={ item.id }>
							{ item.login }
						</div>
					) }
					menuStyle={ {
						zIndex: 9999999900,
						cursor: 'pointer',
						borderRadius: '0px',
						boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
						background: 'rgba(255, 255, 255, 0.9)',
						padding: '2px 0',
						fontSize: '1rem',
						position: 'fixed',
						overflow: 'auto',
						maxHeight: '50%',
					} }
					inputProps={ { placeholder: __( 'Type the github username' ),
						style: {
							width: '100%',
							border: 'none',
							height: '50px',
							outline: 'none',
							boxShadow: 'none',
						},
					} }
					value={ this.state.value }
					onChange={ this.fetchSuggestion }
					onSelect={ this.selectEvent }
				/>
			</div>
		);

		if ( attributes.title ) {
			retVal.push(
				<h3>{this.props.attributes.title}</h3>
			);
		}
		if ( attributes.url ) {
			retVal.push(
				<img src={ this.props.attributes.url } />
			);
		}

		return retVal;
	}
}

export default Profile;
