import React from "react";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tourists from "./components/pages/tourists";
import Login from "./components/pages/login";
import PrivateRoute from "./components/helper/privateRoute";
import PublicRouter from "./components/helper/publicRoute";
import PageNotFound from "./components/pages/pageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/tourists" component={Tourists} exact />
        <PublicRouter path="/admin" component={Login} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
