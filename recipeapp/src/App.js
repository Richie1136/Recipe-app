import './App.css';
import Trending from './components/trending/Trending'
import Search from './components/search/Search';
import Veggie from './components/veggie/Veggie';

function App() {
  return (
    <div className="App">
      <h2>Recipe Application</h2>
      <Search />
      <Trending />
      <Veggie />
    </div>
  );
}

export default App;
