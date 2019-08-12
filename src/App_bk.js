import React, { Component } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Users from "./components/users";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";

import "./App.css";

class App extends Component {
  
  
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/users" component={Users} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/users" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
