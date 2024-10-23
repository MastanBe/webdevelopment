import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './hello'

function App() {

  let [counterValue,setCounter]=useState(1);
  const addFunc=()=>{
    if(counterValue>=0 &&counterValue<5){
      setCounter(counterValue+1);

    }
    // counterValue=counterValue+1;

  }
  const removeFunc=()=>{
    if(counterValue>0)
      {
        setCounter(counterValue-1);
      }
   

  }
  // document.querySelector('#add').addEventListener('click',()=>{
  //   counterValue=counterValue+1;
  //   // setCounter(counterValue);
  //   console.log(counterValue);
  // })
   



  return (
    <>
      <button id='add' onClick={addFunc}  className='button  font-bold h-32 w-64  text-xl rounded-xl  bg-green-600 pt-4 pb-10 pr-10 pl-20 round-3'>Add Value {counterValue}</button>
      <br />
      <button onClick={removeFunc}>Remove Value {counterValue}</button>

      
    </>
  )
}

export default App
