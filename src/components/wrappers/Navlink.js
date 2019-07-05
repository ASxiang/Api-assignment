import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    let isActive =
      this.context.router.route.location.pathname === this.props.to;

    let className = isActive ? "active" : "";
    if (this.props.className) {
      className = className + " " + this.props.className;
    }

    return (
      <Link {...this.props} className={className}>
        {this.props.children}
      </Link>
    );
  }
}

export default NavLink;
