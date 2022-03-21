import './Search.css'

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Search an Item' />
      <div className='search-logo'>
        <i className='fas fa-search' />
      </div>
    </div>
  )
}

export default Search