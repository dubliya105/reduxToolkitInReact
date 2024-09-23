import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
function Todo() {
        const todos=useSelector(state=>state.todos)
        const dispatch=useDispatch()
  return (
    <>
    <div>
        Todos
    </div>
    {
        todos.map((todo,index)=>{
            return (
              <div key={index}>
                <div className="flex mb-4 items-center">
                  <p className="w-full text-grey-darkest">
                    {todo.text}
                  </p>
                  <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                    Done
                  </button>
                  <button 
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                  onClick={()=>dispatch(removeTodo(todo.id))}>
                    Remove
                  </button>
                </div>
              </div>
            );})
    }
    </>
  );
  
}

export default Todo