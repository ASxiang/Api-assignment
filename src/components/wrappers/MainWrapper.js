import React, { Fragment,Component } from "react";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Navlink from "../wrappers/Navlink";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import Hidden from '@material-ui/core/Hidden';  

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
  });

class MainWrapper extends Component  {

  constructor(props, context) {
    super(props, context);
    this.state={
    mobileOpen: false,
    } 
}


componentWillReceiveProps(props) { 

}
  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };


  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        
        <Navlink className="nav-link" to="/">
                <i className="fas fa-chart-line classes.heading" />Dashboard
              </Navlink>
        <ExpansionPanel style={{ display: `${this.state.m1}` }}>
                
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography ><i  />Employee</Typography>
                    </ExpansionPanelSummary>
                        <div >
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

      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={!this.state.mobileOpen}>
          <IconButton  color="inherit"   onClick={this.handleDrawerOpen} aria-label="Menu"
              className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>Test React</Typography>
        </Toolbar>
      </AppBar>
     
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
          <Drawer 
    variant="temporary"
    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
    open={this.state.mobileOpen}
    classes={{
      paper: classes.drawerPaper,
    }}
     
    > 
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />  
            </IconButton>
            
            {drawer}
           
         
    </Drawer>
           
          </Hidden>
          
          <div style={{ display:`${this.props.isDisplayOn}` }} className="loadingSpinner"></div>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
        
          <div className={classes.toolbar} />
          {this.props.children}
          <Typography paragraph>
        
          </Typography>
          <Typography paragraph>
          
          </Typography>
        </main>
        
   
      </div>
    );
  };

}

export default withStyles(styles,{withTheme: true})(MainWrapper);
