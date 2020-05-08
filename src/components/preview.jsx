import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Preview = (props) => {
	return (
		<div className='col'>
			<h1>Preview</h1>
			<div
				id='preview'
				className='mt-4 text-left overflow-auto'
				style={{ height: 500 }}
			>
				{ReactHtmlParser(props.text)}
			</div>
		</div>
	);
};

export default Preview;
