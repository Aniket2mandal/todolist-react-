import '../todo.css';
import axios from "axios";
import { useState } from 'react';




 function Todolist(){
    // const todos=[{name:"Get grocorries",task_status:"Doing"},
    // {name:"Get Food",task_status:"Doing"},
    // {name:"Get Football",task_status:"Done"},
    // {name:"Play cricket",task_status:"Doing"}];
    
    const [todos,setTodos]=useState([]);

    async function getAllTodos(){
        const url="/api/todos";
        const response= await axios.get(url);
        setTodos(response,data);
    }
return(
    <>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Status</th>
        </tr>
        </thead>
       <tbody>
        {todos.map((todo)=>{
           return(  <tr key={todo.nam}>
             <td>{todo.name}</td>
             <td>{todo.task_status}</td>
         </tr>
           );
        })}
       </tbody>
       
        {/* <tr>
            <td>Get Food</td>
            <td>done</td>
            
        </tr> */}
    </table>
    <button type="submit" onClick={getAllTodos}>click Here</button>
    </>
)
}
export default Todolist;