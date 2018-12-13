import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddBusiness from "./components/Tabs/AddBusiness";
import Contact from "./components/Tabs/Contact";
import Benefits from "./components/Tabs/Benefits";
import { Header } from "./components/layouts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/business" component={AddBusiness} />
          <Route path="/contact" component={Contact} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/header" component={Header} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
