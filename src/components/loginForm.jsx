import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";


class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .min(6)
      .valid('superadmin')
      .label("Username"),
    password: Joi.string()
      .required()
      .valid('adminpass')
      .label("Password")
  };

  doSubmit = () => {  
     this.props.history.replace("/users");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
