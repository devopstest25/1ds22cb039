import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div style={{width: "500px"}}>
    <h1>Todo</h1>
      <input type="text" onChange={(e) => setName(e.currentTarget.value)} style={{padding: "10px", display: "block", margin: "10px", width: "500px"}}/>
      <input type="text" onChange={(e) => {setDesc(e.currentTarget.value)}} style={{padding: "10px", display: "block", margin: "10px", width: "500px"}}/>
      <button
      onClick={()=>setTodos([...todos, {name, desc}])}
      style={{backgroundColor : 'black', color: 'white'}}
      >
        Add
      </button>
      <div>
        {todos && todos.map((todo, index) => {
          return (
            <div key={index} style={{border: "solid 1px black", margin: "10px", width: "500px"}}>
              <h1>{todo.name}</h1>
              <h2>{todo.desc}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
