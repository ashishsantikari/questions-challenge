import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/detail/:questionId`}>
          <h1>Detail page</h1>
        </Route>
        <Route path="*">
          <h1>404: NOT FOUND</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
