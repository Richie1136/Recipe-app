import './App.css';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Search />
      <Categories />
      <Navigation />
    </div>
  );
}

export default App;
