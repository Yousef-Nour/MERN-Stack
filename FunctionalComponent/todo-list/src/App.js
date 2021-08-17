import './App.css';
import React, {useState} from 'react'
import Todo from './components/Todo';
import ToDoList from './components/ToDoList'

function App() {
  const [toDoList, setToDoList] = useState([]);
  const retrieveToDoList = (toDo) => {
    setToDoList([...toDoList, toDo]);
  }

  const deleteElement = newArray => {
    setToDoList(newArray);
  }

  return (
    <div className="App">
      <Todo tasks = {retrieveToDoList}/>
      {
        toDoList.length > 0 ? 
          toDoList.map(
            (value, key) => <ToDoList toDo = {value} tasks = {deleteElement} arr = {toDoList}/>
          )
        :
        ""
      }
      
    </div>
  );
}

export default App;
