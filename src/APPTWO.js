import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ACTION, DELETE_ACTION, UPDATE_ACTION } from './Redux/ActionType';
import { type } from '@testing-library/user-event/dist/type';
import { add, deletepost, filtring, update, updatename } from './Redux/PostsActions';

function APPTWO() {
  const dispatch = useDispatch();
  const actionlist = useSelector((state) => state); 
  const [showDone, setShowDone] = useState(false); // State to toggle showing done actions


  

  const [writing, setWriting] = useState('');
  const [index, setIndex] = useState(1);
  const handleAdd = () => {
    if (writing.trim() !== '') {
        setIndex(index+1)
      dispatch(  add({ id:index   ,name: writing, status: false })  );
      setWriting('');
       // Clear the input after adding
    }
  };
 


  

  const hundleDelete=(a)=>{dispatch(deletepost(a))

 

}


  const hundleUpdate=(b)=>{dispatch(update(b))}

  const hundleUpdate2=(C)=>{
    const   userInput = window.prompt("Please enter the new name of the task:");
    dispatch(updatename({id:C , change: userInput}))}

    const hundleFilter = () => {
      setShowDone(!showDone);
      dispatch(filtring(showDone)); // Dispatch action to filter based on showDone state
    }

  return (
    <div>
      <div style={{ height: '80px', backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <input type='text' placeholder='Activity' style={{ width: '300px' }} value={writing} onChange={(e) => setWriting(e.target.value)} />
        <button style={{ width: '50px', borderRadius: '10px' }} onClick={handleAdd}>Add</button>
        <button style={{ width: '150px', borderRadius: '10px' }} onClick={hundleFilter}>{showDone ? 'Undone Actions' : 'Done Actions'}</button>
      </div>

      
      <div id='home' style={{textAlign:'center'}}>
      <h1>My To-Do list</h1>
        {actionlist.map((item) => (
          <div>
          <div key={item.id}   style={{display:'flex'  , alignItems:'center' , justifyContent:'center' , gap:'20px'}}>
          
            <h3 onClick={()=>hundleUpdate2(item.id)}>{item.name}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
             style={{height:'20px', stroke:'grey' , fill:'grey'}} onClick={()=>hundleDelete(item.id)} ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /> </svg>
           
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 
       style={{ height: '20px', stroke: item.status ? 'green' : 'red', fill: item.status ? 'green' : 'red' }}
       onClick={()=>hundleUpdate(item.id)} > <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64  64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
           

          </div>
          <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APPTWO;