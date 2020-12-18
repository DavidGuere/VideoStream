import React from "react";
import Card from "./Card";
import Nav from "./Nav";
import Results from "./results";
import Error from "./error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Placeholder from "./placeholder";

function HomePage() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Card />
          </Route>
          <Route path="/video/:videoURL" children={<Placeholder />}></Route>
          <Route path="/results/:search">
            <Results />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default HomePage;
