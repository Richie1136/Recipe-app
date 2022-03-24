import './App.css';
import Row from './components/row/Row';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <h2>Recipe Application</h2>
      <Search />
      <Row title='Our Vegetarian Picks' />
      {/* <Row title='Trending' /> */}
    </div>
  );
}

export default App;
