import Todo from './Todo';



export default function TodoList({todos,deleteTodo}) {
return(
    <>
    
    <ul>
        {todos.map((todo) => (
           <Todo key ={todo.id} 
            id={todo.id} text ={todo.text}
            deleteTodo = {deleteTodo} />
))}
    </ul>
    </>
)

}