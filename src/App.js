import React from 'react';
import TodoForm from './component/TodoForm';


const App = () =>{
    return(
        <>
        <div className="container card p-5">
        <h1 style={{textAlign:"center"}}>Todo List</h1>
        <TodoForm/>
        </div>
        </>
    );
}
export default App;