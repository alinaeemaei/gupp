import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../About";
import Home from "../Home/Home";

const Main: (props: any) => JSX.Element = (props: any) => {
  return (
    <Switch>
      <Route path="/home" render={props => <Home />} />
      <Route path="/about" render={props => <About />} />
      <Redirect to="/home" />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
export default Main;
