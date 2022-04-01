import './App.css';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Navigation from './components/navigation/Navigation';
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
