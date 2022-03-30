import './App.css';
import Trending from './components/trending/Trending'
import Search from './components/search/Search';
import Veggie from './components/veggie/Veggie';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App">
      <Search />
      <Categories />
      <Trending />
      <Veggie />
    </div>
  );
}

export default App;
