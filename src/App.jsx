import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
    </Switch>
  );
}

export default App;
