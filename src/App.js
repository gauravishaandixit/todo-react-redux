import './App.css';
import Input from './components/input/Input'
import { useSelector } from 'react-redux'
import ShowTodo from './components/todolist/TodoList'


function App() {

  const todoListFromState = useSelector(state => state.todoList)

  return (
    <div className="app">
      <div className = 'app__container'>
        <div className = 'todo__container'>
          {
            todoListFromState.map((item) => 
              <ShowTodo item = {item.item} done = {item.done} id = {item.date} key = {item.date}/>)
          }
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
