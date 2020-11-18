import React, { useState, useEffect } from 'react'

// * imorting Components
import Form from './component/Form'
import TodoList from './component/TodoList'

// * import the app.css file
import './App.css'

function App() {
  // state
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // Run Only once to retireve our existing localstorage items if any
  useEffect(() => {
    getLocalTodos()
  }, [])

  // useEffect to update Our UI everytime our todos or status change
  useEffect(() => {
    filterHandler()
    saveToLocalStorage()
  }, [todos, status])

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  // Save to Local storage
  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoFromLocal)
    }
  }

  return (
    <div className='App'>
      <header>Sallah's Todo List</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
