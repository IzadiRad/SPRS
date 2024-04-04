import React from "react";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import Home from "../pages/Home";
import PageNotFind from "../pages/PageNotFind";
import CountProviders from "../Providers/Providers";
const Router = () => {
  return (
    <CountProviders>
      <Routers basename="/SPRS">
        <Navbar className="App-header" />
        <main>
          <Switch>
            <Route path="/"  component={Home} />
            <Route path="/*" exact component={PageNotFind} />
          </Switch>
        </main>
      </Routers>
    </CountProviders>
  );
};

export default Router;
