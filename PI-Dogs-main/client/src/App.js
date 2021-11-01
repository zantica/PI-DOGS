import './App.css';
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/Landing'
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
        <Route path='/home'>
          <Navbar />
          <Home />
        </Route>
        <Route path='/details'>
        <Details />
        </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
