import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';

function App() {
  let [balance, setBalance] = useState(0);
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/inventory'>Inventory</Link></li>
          </ul>
        </nav>
      </header>
      <Route path='/' exact render={() => <h1>Home</h1>} />
      <Route path='/shop' exact render={() => <h1>shop</h1>} />
      <Route path='/inventory' exact render={() => <h1>inventory</h1>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
