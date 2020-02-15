import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home, Results, Details} from './pages/index'
// routes config
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/results" component={Results}/>
        <Route exact path="/details" component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
