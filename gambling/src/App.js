import {Route, Link, BrowserRouter} from 'react-router-dom';
import Main from './Containers/MainPage/Main';
import classes from './App.module.css'
function App() {
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Roulette</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/inventory'>Inventory</Link></li>
          </ul>
        </nav>
      </header>
      <Route path='/' exact component={Main} />
      <Route path='/shop' exact render={() => <h1>shop</h1>} />
      <Route path='/inventory' exact render={() => <h1>inventory</h1>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
