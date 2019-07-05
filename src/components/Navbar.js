import React, { Component } from "react";
import { withRouter } from "react-router";
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {
  _signOut = () => {
      localStorage.clear();
    this.props.history.push("/");
  };

  render() { 
    return (
      
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <span className="navbar-brand col-sm-3 col-md-2 mr-0">
        <Typography variant="h6" color="inherit"  >
            GeoMap User Panel
          </Typography>
          <i className="fab fa-affiliatetheme" />
        </span>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <span onClick={this._signOut} className="nav-link">
             Sign Out
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
