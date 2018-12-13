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

class Contact extends Component {
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
              height: "150px",

              backgroundColor: "rgba(255,255,255,0.5)"
            }}
          >
            <p>Place content here.</p>
          </div>
          <div style={{ textAlign: "center", paddingTop: "100px" }}>
            <h1>Contact</h1>
          </div>
        </div>

        <div>
          <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <h1> Get In Touch</h1>
            <p>Contact us now and let your journey begin</p>
            <p>
              Address: Bul Bulgaria 58 , Jacklyn Building,Entrance C,Floor 4
            </p>
            <p>Telephone:+088 706 6645</p>
            <p>email:info@medusaguide.com</p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
