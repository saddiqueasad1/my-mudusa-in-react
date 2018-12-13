import React, { Component } from "react";
import "./Destinations.css";
import Bgcolor from "../../images/bgcolor.bmp";
const sectionStyle = {
  width: "100%",
  height: "1200px",
  backgroundImage: "url(" + Bgcolor + ")"
};

class Dest extends Component {
  render() {
    return (
      <div>
        <div className="row vertical">
          <div className="col-xs-4 col-md-4">
            <h2>Exciting Destinations</h2>
          </div>
          <div className="col-xs-4 col-md-4">
            <p>
              Medusa Guide has chosen the most exciting destinations for you to
              visit
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div className="container">
              <a href="#home">
                <img
                  src={require("../../images/1.jpg")}
                  alt="l"
                  className="image"
                  style={{
                    height: "400px",
                    width: "90%",
                    padding: "80px"
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-xs-6 col-md-6">
            <img
              src={require("../../images/2.jpg")}
              alt="l"
              className="image"
              style={{
                height: "300px",
                width: "90%",
                paddingTop: "80px"
              }}
            />
            <img
              src={require("../../images/3.jpg")}
              alt="l"
              className="image"
              style={{
                padding: "30px"
              }}
            />
            <img
              className="image"
              src={require("../../images/4.jpg")}
              alt="l"
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <div>
            <nav className="nav nav-masthead justify-content-center">
              <h1 style={{ color: "white", padding: "100px" }}>
                Medusa Guide Application for Android
              </h1>
              <div className="container">
                <a href="#home">
                  <img
                    src={require("../../images/1.jpg")}
                    alt="l"
                    className="image"
                    style={{
                      height: "900px",
                      width: "90%",
                      padding: "20px"
                    }}
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Dest;
