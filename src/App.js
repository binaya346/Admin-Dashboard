import React from "react";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tourists from "./components/pages/tourists";
import Login from "./components/pages/login";
import PrivateRoute from "./components/helper/privateRoute";
import PublicRoute from "./components/helper/publicRoute";
import PageNotFound from "./components/pages/pageNotFound";
import Landmark from "./components/pages/landmark";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/tourists" component={Tourists} exact />
        <PublicRoute path="/admin" component={Login} exact />
        <PrivateRoute path="/landmark" component={Landmark} exact />
        <Route path="/" commponent={Login} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
