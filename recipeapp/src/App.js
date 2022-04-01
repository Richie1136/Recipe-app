import './App.css';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Categories />
      <Navigation />
      <Search />
    </div>
  );
}

export default App;
