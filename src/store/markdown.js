import { createStore } from 'redux';
import { connect } from 'react-redux';
import marked from 'marked';
import { defaultText } from '../components/common/default';

const ON_EDITING = 'ON_EDITING';

const editAction = (text) => ({ type: ON_EDITING, payload: { text } });

const markdownReducer = (state = defaultText, action) => {
	switch (action.type) {
		case ON_EDITING:
			return marked(action.payload.text);

		default:
			return marked(state);
	}
};

const store = createStore(markdownReducer);

const mapStateToProps = (state) => ({ text: state });
const mapDispatchToProps = (dispatch) => ({
	edit: (text) => dispatch(editAction(text)),
});

const createContainer = (Component) =>
	connect(mapStateToProps, mapDispatchToProps)(Component);

export { store, createContainer };
