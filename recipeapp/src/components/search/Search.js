import './Search.css'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = () => {
  return (
    <form className='search'>
      <input type='text' placeholder='Search an Item' />
      <div className='search-logo'>
        <i className="fa-solid fa-magnifying-glass">
          <FaSearch />
        </i>
      </div>
    </form>
  )
}

export default Search