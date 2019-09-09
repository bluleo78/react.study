import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }


  render() {
    return (
      <div>
        <input type='text' ref={this.input} />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const text = this.input.current.value.trim();
    this.props.onAddClick(text);
    this.input.current.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};