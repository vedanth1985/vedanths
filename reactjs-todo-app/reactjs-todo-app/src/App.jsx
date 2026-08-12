import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Clone this repo', done: true },
    { id: 2, text: 'Build the Docker image', done: false },
    { id: 3, text: 'Run the container', done: false },
  ])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>ReactJS Todo App</h1>
      <p className="subtitle">A small practice project for Docker builds.</p>

      <form onSubmit={addTodo} className="add-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>

      <p className="footer">Built with Vite + React, ready for Docker.</p>
    </div>
  )
}

export default App
