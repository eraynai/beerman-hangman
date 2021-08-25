import React, { Component } from 'react';

class GamePage extends Component {
	state = {
		buttonClicked: true,
	};

	handleClick = () => {
		this.setState({ buttonClicked: false });
	};

	render() {
		return (
			<div>
				<h1>Test</h1>
			</div>
		);
	}
}

export default GamePage;
