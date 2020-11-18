import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // * hanlde input change
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  //* handle form submition
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: inputText, comleted: false, id: Math.random() * 1000 },
    ])
    setInputText('')
  }

  // Handle select list change
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type='text'
        value={inputText}
        className='todo-input'
        onChange={inputTextHandler}
      />
      <button className='todo-button' type='submit' onClick={submitTodoHandler}>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select name='todos' className='filter-todo' onChange={statusHandler}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
