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
      <>
        <div class="navbar">
          <a href="splash.html" class="home">
            GettingSettled
          </a>
          <button class="about">About</button>
          <button class="contact">Contact Us</button>
        </div>
        <div class="box">
          <div class="form">
            <p id="p1">LOGIN</p>
            <br />
            <div class="mainform">
              <form>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  id="username"
                />
                <br />
                <input
                  type="password"
                  placeholder="password"
                  name="passwd"
                  id="passwd"
                />
                <input type="submit" value="SIGN-IN" class="submit" />
                <a href="url" class="forgor">
                  forgot password?
                </a>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
