import React from "react";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tourists from "./components/pages/tourists";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/tourists" exact>
          <Tourists />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
