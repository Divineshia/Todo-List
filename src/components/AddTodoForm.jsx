import {useState} from 'react';

export default function AddTodoForm({addTodo}){
    const[todoText, setTodoText] = useState('');

    const handleInputChange =(e)=>{
        setTodoText(e.target.value);
       }

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(todoText.trim() !==''){
        addTodo(todoText); 
        setTodoText('');
    }
   }

   

    return(
        <form onSubmit ={handleSubmit}>
       <input type ='text' value ={todoText} onChange={handleInputChange}/>

        <button type='submit'>ADD ToDo </button>
        

        </form>
    )

}