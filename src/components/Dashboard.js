import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        This is Dashboard. You can see it only if you are logged in.
        <button onClick={this._signOut}>Sign Out</button>
      </div>
    );
  }
}

export default Dashboard;
