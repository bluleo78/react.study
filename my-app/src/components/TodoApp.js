import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends React.Component {
  render() {
    const { visibleTodos, visibilityFilter, onAddClick, onTodoClick, onFilterChange } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => onAddClick(text)} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => onTodoClick(index)} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => onFilterChange(nextFilter)} />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};