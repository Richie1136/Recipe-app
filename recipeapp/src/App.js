import './App.css';
import Trending from './components/trending/Trending'
import Search from './components/search/Search';
import Veggie from './components/veggie/Veggie';

function App() {
  return (
    <div className="App">
      <Search />
      <Trending />
      <Veggie />
    </div>
  );
}

export default App;
