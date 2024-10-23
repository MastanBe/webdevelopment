import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './Card.jsx'

// const reactElement=(
//   <a href="https://google.com" target='_blank'>Google</a>
// )
// const another=React.createElement(
//   'a',{href:"https://google.com"},"google"
// )
// const user="Shaik"
// function MyApp(){
//   return(
//     <h1>Hello {user} </h1>
//   )
// }
const myObj={
  name:"Mastan Be",
  branch:"Ece"
}
const arr=[[1,2,3],[4,5,6]]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Card username="Mastan Be" myarr={arr} link="visit me"/>
    <Card myarr={arr} link="Click Me"/>

  </>

   


)
