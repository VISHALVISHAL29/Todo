import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DeleteIcon from '@mui/icons-material/Delete'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const onClick = (id) => {
    setTodos(todos.filter(item => item.id !== id));
   

  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    const newTodos = {
      id: uuidv4(),
      todo: inputValue,
      checked:false
    } 

    setTodos([...todos, newTodos]);
    setInputValue('')
  }

  const isChecked = (id) => {
   setTodos(todos.map(item => 
        item.id === id ? {...item , checked: !item.checked}:item
      ))
  }

  return (
    <div>
      <div className='child-container' id='container'>
        <input
          className='input'
          type="text"
          placeholder='Enter Todos'
          value={inputValue}
          onChange={handleChange} />
        <button
          className='button'
          onClick={handleClick}>
          Add Task
        </button>
      </div>
      <div className='sub-container'>
        <ul className='unorderedlist'>
          {todos && todos.map((item) => (
            <li key={item.id} 
            className={item.checked?'checked' : ' '}>
              <input type="checkbox" 
              checked = {item.checked}
              onChange={()=>isChecked(item.id)} />
              <span className='todo-text'>
              {item.todo}
              </span> 
              <button onClick={() => onClick(item.id)}>
              <DeleteIcon className='delete' />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App


//After the button click I want my todos render on the screen what 