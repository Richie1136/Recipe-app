import './Search.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = () => {

  const [input, setInput] = useState('')

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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