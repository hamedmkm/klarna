import React,{} from 'react';
import {BrowserRouter as  Router, Route, Switch,Redirect } from 'react-router-dom';
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import SignUp from './containers/SignUp/SignUp'
import NotFound from './containers/404/404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menus from './containers/Menu/Menus'
import Balance from './containers/Menu/Balances'
import Deposit from './containers/Menu/Deposits'
import Withdraw from './containers/Menu/Withdraws'
import Affiliate from './containers/Menu/Affiliates'



function App() {
  const paths = ['/','/login'];
  return (
    <div>
    <Menus/>
    <Router basename='/'>
      <Route path={paths} exact component={Header} />
      <Route path={paths} exact component={Menus}/>
      <Switch>
        <Route path='/Balance' exact component={Balance} />
        <Route path='/Deposit' exact component={Deposit} />
        <Route path='/Withdraw' exact component={Withdraw} />
        <Route path='/Affiliate' exact component={Affiliate} />
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
      <Route path={paths} exact component={Footer} />
    </Router>
    </div>
  );
}

export default App;
