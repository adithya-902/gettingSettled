import React, { Component } from "react";
import Home from "./Home";
import "./user.css";
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  render() {
    return (
      <div>
        <td className="welcome">Welcome back {this.state.userData.fname}</td>

        <td className="homehome">
          <Home />
        </td>
        <td className="logout1">
          <button onClick={this.logOut} className="logout">
            Log out
          </button>
        </td>
      </div>
    );
  }
}
