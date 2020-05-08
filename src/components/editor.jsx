import React, { Component } from 'react';
import { defaultText } from './common/default';

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: defaultText,
		};
	}

	handleChange = (event) => {
		const { value } = event.target;
		this.setState({ input: value });
		this.props.edit(value);
	};

	render() {
		return (
			<div className='col'>
				<h1>Editor</h1>
				<form>
					<div className='form-group'>
						<label htmlFor='editor'></label>
						<textarea
							id='editor'
							className='form-control'
							rows='20'
							value={this.state.input}
							onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Editor;
