import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import TodoApp from '../components/TodoApp';


function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  default:
    return todos;
  }
}

function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onAddClick: (text) => {
      dispatch(addTodo(text))
    },
    onTodoClick: (index) => {
      dispatch(completeTodo(index))
    },
    onFilterChange: (nextFilter) => {
      dispatch(setVisibilityFilter(nextFilter));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);