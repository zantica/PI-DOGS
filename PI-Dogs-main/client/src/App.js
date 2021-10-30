import './App.css';
import  { BrowserRouter } from 'react-router-dom'
import Dogs from './components/Dogs';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />
        <Dogs />
      </div>
    </BrowserRouter>
  );
}

export default App;
