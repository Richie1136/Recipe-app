import './Search.css'

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Search an Item' />
      <div className='search-logo'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Search