import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";

const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/chat" render={(props) => <App {...props} />} />
      </Switch>
    </div>
  );
};

export default Router;
