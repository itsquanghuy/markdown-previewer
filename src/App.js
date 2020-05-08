import React from 'react';
import Editor from './components/editor';
import Preview from './components/preview';
import { createContainer, store } from './store/markdown';
import { Provider } from 'react-redux';

const EditorContainer = createContainer(Editor);
const PreviewContainer = createContainer(Preview);

function App() {
	return (
		<div className='container text-center'>
			<div className='row mt-5'>
				<Provider store={store}>
					<EditorContainer />
					<PreviewContainer />
				</Provider>
			</div>
		</div>
	);
}

export default App;
