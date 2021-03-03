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
      <div id="Clipex-Wire-Testing" className="App">
        <div className="main-container">
          <header>
            <Navbar />
          </header>
          <main>
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
          </main>
          <footer></footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
