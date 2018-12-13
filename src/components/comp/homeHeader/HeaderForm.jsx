import React, { Component } from "react";

class HeaderForm extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div>
          <h1 style={{ color: "#FFF" }}>
            Discover New Exciting Places Near You...
          </h1>
          <h2 style={{ color: "#FFF" }}>Explore Your City</h2>
        </div>
        <div
          className="card"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rawalpindi"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="hat you like"
                  />
                </div>

                <div className="col">
                  <button type="submit" className="btn btn-warning mb-4">
                    Search Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default HeaderForm;
