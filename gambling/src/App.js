import {Route, Link, BrowserRouter} from 'react-router-dom';
import React,{useState} from 'react';
import Main from './Containers/MainPage/Main';
import classes from './App.module.css'
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/BackDrop/Backdrop';
function App(props) {
  const [Show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <div style={{height: '100%'}}>
        {Show ? 
          <div>
            <SideDrawer />
            <Backdrop clicked={()=>setShow(prev => !prev)}/>
            </div>
        : null}
    <div className={classes.App}>
      <header>
          <nav>
            <button className={classes.ThreeLines} onClick={()=>setShow(prev => !prev)}>
              <div className={classes.Line}></div>
              <div className={classes.Line}></div>
              <div className={classes.Line}></div>
            </button>
            <div className={classes.Spacer}/>
            <ul>
                <li><Link className={classes.Link} to='/'>Roulette</Link></li>
            <li><Link className={classes.Link} to='/shop'>Shop</Link></li>
                <li><Link className={classes.Link} to='/inventory'>Inventory</Link></li>
                <li>{props.balance}</li>
          </ul>
        </nav>
      </header>
      <Route path='/' exact component={Main} />
      <Route path='/shop' exact render={() => <h1>shop</h1>} />
      <Route path='/inventory' exact render={() => <h1>inventory</h1>}/>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
