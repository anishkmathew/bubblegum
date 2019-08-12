import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import Users from "./components/users";
import UserForm from "./components/userForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";


import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//import './HoverButton.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/users/:id" component={UserForm} />
            <Route path="/users" component={Users} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/login" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
