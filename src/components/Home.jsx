import React, { Component } from "react";
import HaederImage from "./comp/homeHeader/HaederImage";
import Destinations from "./comp/Destinations/Destinations";
import Suggested from "./comp/Suggested/Suggested";
import Magazine from "./comp/Magazine/Magazine";
import { Footer } from "./layouts";

class Home extends Component {
  render() {
    return (
      <div>
        <HaederImage />

        <Destinations />
        <Suggested />
        <Magazine />
        <Footer />
      </div>
    );
  }
}

export default Home;
