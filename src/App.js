import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Fullstack' }
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Wellcome to react hook</h1>
      <ColorBox />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}
      />
    </div>
  );
}

export default App;
