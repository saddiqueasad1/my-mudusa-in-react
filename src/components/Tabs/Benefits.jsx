import React, { Component } from "react";
import { Header, Footer } from "../layouts";
import Background from "../images/desktop.jpg";

const sectionStyle = {
  width: "100%",
  height: "400px",

  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: "no-repeat",
  overflow: "hidden"
};

class Benefits extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "black" }}>
          <Header />
        </div>

        <div style={sectionStyle}>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: "100px",
              backgroundColor: "rgba(255,255,255,0.5)"
            }}
          >
            <p>Place sticky footer content here.</p>
          </div>
          <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <h1>VIP MEMBERS</h1>
          </div>
        </div>

        <div style={{ textAlign: "center", background: "white" }}>
          <div className="row vertical">
            <div className="col-xs-4 col-md-4">
              <h2>01>Social Media Marketing</h2>
            </div>
            <div className="col-xs-4 col-md-4">
              <p>
                Each business profile is being promoted in our Social Media ,
                including Facebook, Tweeter and Instagram
              </p>
            </div>
          </div>
          <div className="row vertical">
            <div className="col-xs-4 col-md-4">
              <h2>Exciting Destinations</h2>
            </div>
            <div className="col-xs-4 col-md-4">
              <p>
                Medusa Guide has chosen the most exciting destinations for you
                to visit
              </p>
            </div>
          </div>
        </div>
        <div className="MYrow">
          <h1>Become A VIP Business Member</h1>
          <p>
            Join VIP Businesses With Hundreds Of Exciting Companies From Around
            The Globe
          </p>

          <button className="button1">order now</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Benefits;
