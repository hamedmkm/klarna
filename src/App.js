import React,{} from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          hello
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
