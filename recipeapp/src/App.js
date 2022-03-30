import './App.css';
import Trending from './components/trending/Trending'
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <h2>Recipe Application</h2>
      <Search />
      <Trending />
    </div>
  );
}

export default App;
