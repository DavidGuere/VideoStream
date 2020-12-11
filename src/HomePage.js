import React from "react";
import Card from "./Card";
import Nav from "./Nav";
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
        </Switch>
      </Router>
    </>
  );
}

export default HomePage;
