import React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import TextBlock from "./textBlock";
import "./Homepage-aviral.css";

import Button from "@mui/material/Button";
import ReactDOM from "react-dom/client";

import "./homepage.css";
import { Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
import App from "./App/App";
import UserDetails from "./userdetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Handleclick = (Event) => {
  window.location.href = "./sign-in";
};

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="App" id="test">
      <Parallax
        pages={1.78}
        style={{ top: "0", left: "0" }}
        class="animation"
        id="1"
      >
        <ParallaxLayer offset={0} speed={0.25} sticky={{ start: 0, end: 2.5 }}>
          <div class="buttons">
            <table class="avi">
              <tr>
                <td>
                  <div class="test">$</div>
                </td>
                <td>
                  <button class="button-68" role="button">
                    <a href="./sign-in">SIGN IN</a>
                  </button>
                </td>
                <td>
                  <button class="button-68" role="button">
                    <a href="./sign-up">SIGN UP</a>
                  </button>
                </td>
                <td>
                  <button class="button-68" role="button">
                    <a href="https://api.whatsapp.com/send/?phone=919910309201&text&type=phone_number&app_absent=0">
                      CONTACT
                    </a>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.5}>
          <div class="animation_layer parallax" id="logoland">
            <h2 class="text_parallax">
              <u>GettingSettled</u>
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Homepage;
