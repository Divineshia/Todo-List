import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddTodoForm from './components/AddTodoForm';



const App = () => {
const[nextId,setNextId] = useState(6);
const[todos,setTodos] = useState ([]);

useEffect(()=>{
//using Promise chaining 
//Or async function fetchTodo (){
  // Fetch initial data from the JSONPlaceholder API
   fetch ('https://jsonplaceholder.typicode.com/todos')
  .then (response => response.json())
  .then (data =>{
     // Add the first few todos to our todo object structure (the full list is pretty long, we don't need all of them)
     const startTodos =[];
     for(let i=0; i<5; i++){
      const item= data[i];
      startTodos.push({
        id: item.id,
        text:item.title,
      })
     }
     setTodos(startTodos);
     console.log(startTodos);
     console.log(todos);
     
  })

.catch((error)=> console.log('error',error));

//}
//  fetchTodo();
},[]);


//AddTodo function 
const handleAddTodo =(text)=>{
  const nextTodo= {
    id:nextId,
    text:text,
  }
  setNextId(nextId +1);
  setTodos((prevTodo)=>[...prevTodo,nextTodo])
}

//DeleteTodo function
const handleDeleteTodo =(id)=>{
setTodos((prevTodo)=>prevTodo.filter((todo) => todo.id !==id));
}



  return (
    <div className="App">
      <h1>Todo List</h1>
      
      <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
      <AddTodoForm addTodo={handleAddTodo}/>
      
      
    </div>
  );
};

export default App;
