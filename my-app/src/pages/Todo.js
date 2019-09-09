import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { withRouter } from "react-router-dom";

import todoApp from '../reducers';
import App from '../containers/TodoApp';

let store = createStore(todoApp);

class Todo extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <App />
    </Provider>
    );
  }
}

export default withRouter(Todo);