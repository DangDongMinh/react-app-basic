import React from 'react';

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => handleClick(todo)}
        >
        {todo.title}
      </li>
      ))}
    </ul>
  );
}

export default TodoList;