/*import React, { Component } from "react";
//import Login from "../Login/Login";
import "./Signup.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status === "ok") {
          alert("Sign up successful");
          window.location.href = "./sign-in";
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => this.setState({ fname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </div>
      </form>
    );
  }
}*/

import React, { Component } from "react";
//import Login from "../Login/Login";
import "./Signup.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status === "ok") {
          alert("Sign up successful");
          window.location.href = "./sign-in";
        }
      });
  }
  render() {
    return (
      <body>
        <form onSubmit={this.handleSubmit}>
          <div class="box">
            <div class="form">
              <p id="p1">Sign up</p>
              <div class="mainform">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  id="fname"
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
                <br />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  id="lname"
                  onChange={(e) => this.setState({ lname: e.target.value })}
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="passwd"
                  id="passwd"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <input type="submit" value="SIGN-IN" class="submit" />
                <a href="/login" class="forgor">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </form>
      </body>
    );
  }
}
