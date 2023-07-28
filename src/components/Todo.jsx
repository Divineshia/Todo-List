


function Todo({id,text, deleteTodo}){
    return(

    <li>
    <p>{text}</p>
    <button onClick={()=>deleteTodo(id)}
    >Delete</button>
     </li> 
    )
}

export default Todo;