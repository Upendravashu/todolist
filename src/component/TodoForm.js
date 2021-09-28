import React,{useState} from "react";
import TodoList from "./TodoList";

const TodoForm = () =>{

    // State
    const[text, setText] = useState('');

    // Store Value State
    const[items, setItems] = useState([]);
    
    // onChange Function
    const handleChange = (event) =>{
       setText(event.target.value);
    }

    // onClick Function
    const handleClick = (event) =>{
     setItems((oldItems)=>{
         return[...oldItems,text]
     })
     setText('');
    }

    // Delete Function
    const deleteItem = (id) =>{
        console.log('delete');
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                       return index !== id;
            })
        })
    }

    return(
        <>

<div className="row">

<div className="col-sm-8">
<div className="mb-3">
  
  <input type="text"
   className="form-control"
   id="todo"
   placeholder="Add To Todo"
       onChange={handleChange}
       value={text}
   />
  
</div>
</div>
<div className="col-sm-4">

{/* Button */}
    <button className="btn btn-primary" onClick={handleClick}>Add</button>
    
    </div>

    {/* Orderlist */}
    <ul style={{listStyle:'none'}}>
        
{

    
        items.map((curEle,index)=>{
          return <TodoList key={index} 
          id={index} 
          test={curEle}
              onSelect = {deleteItem}
          />;
        })
    }
    </ul>  
</div>

        </>
    );
}

export default TodoForm;