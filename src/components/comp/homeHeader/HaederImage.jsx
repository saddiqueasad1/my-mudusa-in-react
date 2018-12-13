import React, { Component } from "react";
import { Header } from "../../layouts";
import Background from "../../images/B0cP.gif";
import HaderForm from "./HeaderForm";
import "./H-css.css";

const sectionStyle = {
  width: "100%",
  height: "800px",

  backgroundImage: "url(" + Background + ")",
  // backgroundRepeat: "no-repeat",
  overflow: "hidden"
};

const sty = {
  textalign: "center",
  vertical: "middle",
  height: "100px"
};

class Home extends Component {
  render() {
    return (
      <div style={sectionStyle}>
        <Header />
        <div style={sty} />
        <HaderForm />
      </div>
    );
  }
}

export default Home;
