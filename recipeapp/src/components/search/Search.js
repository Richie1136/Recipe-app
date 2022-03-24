import './Search.css'

const Search = () => {
  return (
    <div className='search'>
      <input type='text' placeholder='Search an Item' />
      <div className='search-logo'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Search