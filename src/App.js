import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Home, Results, Details} from './pages/index'
import "./assets/css/default.scss"

// routes config
function App() {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/results/:searched" component={Results}/>
          <Route exact path="/details/:name" component={Details}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
