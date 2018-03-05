
const { __ } = wp.i18n;
const { Component, bind } = wp.element;

class Profile extends Component {
	constructor( props ) {
		super( ...arguments );
		
		this.changeEvent = this.changeEvent.bind( this );
		this.fetchReq    = this.fetchReq.bind( this );
	}

	changeEvent( event ) {

		console.log( event.target );

		const term = event.target.value;
		this.props.setAttributes( { inputString: term } );
		this.fetchReq( term );
	}

	fetchReq( term ) {
		const api = `https://api.github.com/users/${term}`;

		fetch( api )
			.then( ( response ) => response.json() )
			.then( ( response ) => {
				console.log( response );
				this.props.setAttributes( {
					title: response.name,
					url: response.avatar_url,
				} );	
			} )
	}

	render() {
		return(
			<div>
				<h3>Enter Your Github Profile</h3>
				<input type="text" className="abcd" value={ this.props.attributes.inputString } onChange={this.changeEvent} />
				<h3>{this.props.attributes.title}</h3>
				<img src={ this.props.attributes.url } />
			</div>
		);
	}
}

export default Profile;
