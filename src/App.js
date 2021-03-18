import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js';
import Summary from './components/Summary.js';
import Account from './components/Account';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div id="Clipex-Wire-Testing" className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <div className="main-container">
            <header>
              <Navbar />
            </header>
            <main>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/summary">
                <Summary />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
