import React, { Component } from "react";
import "./styles.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");

          window.localStorage.setItem("token", data.data);

          window.location.href = "./dashboard";
        }
      });
  }
  render() {
    window.localStorage.setItem("token", 0);
    return (
      <body class="login-body">
        <header>
          <a href="" class="logo">
            getting<span>Settled</span>
          </a>
        </header>
        <div class="bigbox">
          <form onSubmit={this.handleSubmit}>
            <div class="box">
              <div class="forms">
                <p id="p1">Sign in</p>
                <div class="mainform">
                  <input
                    type="email"
                    placeholder="Email"
                    name="username"
                    id="username"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="password"
                    name="passwd"
                    id="passwd"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <input type="submit" value="SIGN-IN" class="submit" />
                  <a href="/sign-up" class="forgor">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
    );
  }
}
