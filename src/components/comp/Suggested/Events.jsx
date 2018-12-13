import React, { Component } from "react";
import Bgcolor from "../../images/bgcolor.bmp";
import "./Enents.css";
const sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: "url(" + Bgcolor + ")"
};
class Events extends Component {
  render() {
    return (
      <div>
        <div style={sectionStyle}>
          <div>
            <nav className="MYrow1">
              <h1 style={{ color: "white" }}>Upcoming Events</h1>
              <p style={{ color: "white" }}>
                Various upcoming events for all the tastes
              </p>
              <div className="container">
                <a href="#home">
                  <img
                    src={require("../../images/event.jpg")}
                    alt="l"
                    className="image"
                    style={{
                      height: "auto",
                      width: "90%",
                      padding: "20px"
                    }}
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="MYrow">
          <h1>Earn More With Medusa Guide's VIP Card</h1>
          <p>Exclusive offers , exclusive deals and many more...</p>

          <button className="button1">Become Vip membar</button>
        </div>
      </div>
    );
  }
}

export default Events;
