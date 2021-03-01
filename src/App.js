import './index.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Summary from './components/Summary.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Summary />
      <div className="container mx-auto px-4"></div>
    </div>
  );
}

export default App;
