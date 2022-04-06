import './Search.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Search = () => {

  const [input, setInput] = useState('')

  const navigate = useNavigate()

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/searched/' + input)
    setInput("")
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input type='text' value={input} onChange={handleInput} placeholder='Search an Item' />
      <div className='search-logo'>
        <i className="fa-solid fa-magnifying-glass">
          <FaSearch />
        </i>
      </div>
    </form>
  )
}

export default Search