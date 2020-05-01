import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/detail/:questionId`}>
          <Detail />
        </Route>
        <Route path="*">
          <h1>404: NOT FOUND</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
