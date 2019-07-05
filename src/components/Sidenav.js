import React, { Component } from "react";
import classNames from 'classnames';
import Navlink from "./wrappers/Navlink";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from "react-redux";
const styles = theme => ({
    root: {
        width: '100%',
    },
    rootForDivider: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

class Sidenav extends Component {

      constructor(props)
      {
          super(props);
          this.state={
             
          }
    }

    componentWillReceiveProps(props) {
      
    }

    renderMenu() {
    const { classes } = this.props;
    return (
      <nav className="col-md-12 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li style={{marginLeft: '8px'}} className="nav-item">
              <Navlink className="nav-link" to="/">
                <i className="fas fa-chart-line classes.heading" />Dashboard
              </Navlink>
            </li>
            <ExpansionPanel style={{ display: `${this.state.m1}` }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}><i className="fas fa-list-ul" />Dashboard</Typography>
                </ExpansionPanelSummary>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}><i className="fas fa-list-ul" />Employee</Typography>
                    </ExpansionPanelSummary>
                        <div className={classes.rootForDivider}>
                            <List component="nav">
                                <Navlink className="nav-link" to="/allemployee">
                                    <ListItem button>
                                            All Employee
                                    </ListItem>
                                </Navlink>
                                <Divider light />
                                <Navlink className="nav-link" to="/singleemployee">
                                    <ListItem button>
                                    Single Employee
                                    </ListItem>
                                </Navlink>
                                <Divider light />
                            </List>
                        </div>
                      
                    </ExpansionPanel>
</ul>
</div>
</nav>
    )}

    render() {
    const { classes } = this.props;
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li style={{marginLeft: '8px'}} className="nav-item">
              <Navlink className="nav-link" to="/dashboard">
                <i className="fas fa-chart-line classes.heading" />Dashboard
              </Navlink>
            </li>
            {this.renderMenu(classes)}        
          </ul>
        </div>
        <div style={{ display:`${this.props.isDisplayOn}` }} className="loadingSpinner"></div>
      </nav>
    );
  } 
}
Sidenav.propTypes = {
    classes: PropTypes.object.isRequired,
};

let SidenavWithStyles = withStyles(styles)(Sidenav);
  
export default SidenavWithStyles;
  
