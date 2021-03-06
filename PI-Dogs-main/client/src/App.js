import './App.css';
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/Landing'
import Detail from './components/Detail';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/home/:id'>
            <Detail />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
