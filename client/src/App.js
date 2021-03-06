import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivteRoute";
import BubblePage from "./components/BubblePage"


function App() {
  return (
    <Router>
      <div className="App">

      
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage}/>
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
