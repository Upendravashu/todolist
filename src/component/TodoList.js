import React from "react";


const TodoList = (props) =>{
   
    return(
        <>
        <div>
        <li>
        {props.test}
        &nbsp;&nbsp; &nbsp; &nbsp;
        <i className="fa fa-times" aria-hidden="true"
        
        onClick={()=>{
        props.onSelect(props.id);
        }}
        >  
       
        </i>
        &nbsp;&nbsp; &nbsp; &nbsp;
        
        <i className="fa fa-pencil" aria-hidden="true"></i> 
        
        </li>
        </div>
        </>
    );
}
export default TodoList;