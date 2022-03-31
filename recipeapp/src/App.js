import './App.css';
import Trending from './components/trending/Trending'
import Search from './components/search/Search';
import Veggie from './components/veggie/Veggie';
import Categories from './components/categories/Categories';
import Navigation from './components/navigation/Navigation';
import American from './components/american/American';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Search />
      <Categories />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
