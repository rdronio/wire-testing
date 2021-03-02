import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Summary from './components/Summary.js';
import Account from './components/Account';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content ">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/summary">
              <Summary />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
