import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//import AddBusiness from "../Tabs/AddBusiness";

class Footer extends Component {
  state = {
    value: 0,
    anchorEl: null
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <AppBar
          component="div"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={8}>
              <Grid item xs>
                <Typography color="inherit" variant="h5">
                  <img
                    src="https://medusaguide.com/wp-content/uploads/2018/04/Medusaguidegoldmik.png?x22286"
                    alt="Medusa Guide"
                  />
                </Typography>
              </Grid>

              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="home" href="/" />

                <Tab label="Add Your Business" href="business" />

                <Tab
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  label="VIP Card"
                />

                <Tab label="Contact US" href="contact" />
              </Tabs>
            </Grid>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose} to="/benefits">
                Benefits
              </MenuItem>
              <MenuItem onClick={this.handleClose}>list</MenuItem>
              <MenuItem onClick={this.handleClose}>VIP login</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Footer;
