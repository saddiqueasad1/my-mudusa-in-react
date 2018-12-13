import React, { Component } from "react";
import "./Suggested.css";
import Events from "./Events";

class Suggested extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-md-4">
              <h1>Suggested Places</h1>
            </div>
            <div className="col-xs-4 col-md-4">
              <p>
                Medusa Guide's team has chosen the best and most exciting places
                and luxury services for you
              </p>
            </div>
          </div>
          <div className="card-group ">
            <div className="card ">
              <img
                className="card-img-top"
                src={require("../../images/6.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../../images/5.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../../images/4.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="card-group ">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../../images/3.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../../images/2.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../../images/5.jpg")}
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="btnDiv">
            <button className="button">View all Listings</button>
          </div>
        </div>
        <Events />
      </div>
    );
  }
}

export default Suggested;
