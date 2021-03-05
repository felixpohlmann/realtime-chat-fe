import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";

const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/chat" component={App} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Router;
