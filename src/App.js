import React,{} from 'react';
import {BrowserRouter as  Router, Route, Switch,Redirect } from 'react-router-dom';
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import SignUp from './containers/SignUp/SignUp'
import NotFound from './containers/404/404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  const paths = ['/'];
  return (
    <Router basename='/'>
      <Route path={paths} exact component={Header} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
      <Route path={paths} exact component={Footer} />
    </Router>
  );
}

export default App;
