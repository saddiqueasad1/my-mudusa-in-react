import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>
                <i className="fa fa-angle-double-right" />
                Home
              </h5>

              <ul className="list-unstyled quick-links">
                <li>
                  <h3>
                    <i className="fa fa-angle-double-right" />
                    Home
                  </h3>
                </li>
                <li>
                  <a href="#i">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Videos
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#home">
                    <i className="fa fa-angle-double-right" />
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    href="https://wwwe.sunlimetech.com"
                    title="Design and developed by"
                  >
                    <i className="fa fa-angle-double-right" />
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="#home">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#home">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#home">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#home">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#home" target="_blank">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>
                <u>
                  <a href="https://www.nationaltransaction.com/">
                    National Transaction Corporation
                  </a>
                </u>{" "}
                is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
                subsidiary of U.S. Bancorp, Minneapolis, MN]
              </p>
              <p className="h6">
                &copy All right Reversed.
                <a
                  className="text-green ml-2"
                  href="https://www.sunlimetech.com"
                >
                  Sunlimetech
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
