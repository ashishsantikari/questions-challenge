import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const AppWrapper = styled.div`
  width: 50vw;
  margin: auto;
  @media (max-width: 768px) {
    width: 90vw;
    margin: auto;
  }
`;

function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
