import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  form: {
    marginTop: 50
  }
});

class AuthWrapper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid className={classes.form} item>
          {this.props.children}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AuthWrapper);
