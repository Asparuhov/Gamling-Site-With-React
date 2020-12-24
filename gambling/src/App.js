import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import React,{useState, useContext} from 'react';
import Main from './Containers/MainPage/Main';
import classes from './App.module.css'
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/BackDrop/Backdrop';
import Shop from './Containers/Shop/Shop';
import {connect} from 'react-redux';
import {useAuth0} from '@auth0/auth0-react';
import Inventory from './Containers/Inventory/Inventory';
import Wheel50xPage from './Containers/Wheel50x/Wheel50xPage';
function App(props) {
  const [Show, setShow] = useState(false);
  const {user, isAuthenticated} = useAuth0();
  const {loginWithRedirect} = useAuth0();
  const {logout} = useAuth0();
  console.log(user);
  return (
  
    <Router>
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
              <button className={classes.ThreeLines} onClick={() => setShow(prev => !prev)}>
              <li>{isAuthenticated ? <button className={classes.Buttons} onClick={() => logout()}>Logout</button> : <button className={classes.Buttons} onClick={() => loginWithRedirect()}>Login</button>}</li>
              <div className={classes.Line}></div>
              <div className={classes.Line}></div>
              <div className={classes.Line}></div>
              </button>
              { user ? <li className={classes.Balance}>Balance: {props.balance} <p>logged as: {user.nickname}</p></li> : null}
            <div className={classes.Spacer}/>
            <ul>
                <li><Link className={classes.Link} to='/'>Roulette</Link></li>
                <li><Link className={classes.Link} to='/roulette-50x'>Wheel50X</Link></li>
                <li><Link className={classes.Link} to='/shop'>Shop</Link></li>
                <li><Link className={classes.Link} to='/inventory'>Inventory</Link></li>
                <li>{isAuthenticated ? <button className={classes.Buttons} onClick={() => logout()}>Logout</button> : <button className={classes.Buttons} onClick={() => loginWithRedirect()}>Login</button>}</li>
          </ul>
        </nav>
          </header>
            <Route path='/roulette-50x' exact component={Wheel50xPage} />
            <Route path='/' exact component={Main} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/inventory' exact component={Inventory} />
        </div>
        </div>
      
    </Router>

  );
}

const mapStateToProps = state => {
  return {
    balance:state.balance
  }
}

export default connect(mapStateToProps)(App);
