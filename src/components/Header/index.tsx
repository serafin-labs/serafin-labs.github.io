import * as React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import MenuIcon from 'material-ui-icons/Menu';
import CloudIcon from 'material-ui-icons/Cloud';
import LaptopMacIcon from 'material-ui-icons/LaptopMac';
import PeopleIcon from 'material-ui-icons/People';
import StarIcon from 'material-ui-icons/Star';
import Menu, { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer/Drawer';
import List from 'material-ui/List/List';
import Divider from 'material-ui/Divider/Divider';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Hidden from 'material-ui/Hidden/Hidden';
import { withTheme } from 'material-ui/styles';
import ListItemIcon from 'material-ui/List/ListItemIcon';

const logo = require('../../../images/logo-serafin-white.svg')

let ActiveButton = ({ activeColor, to, ...props }: any) => {
  return <Button
    {...props}
    component={props => <Link to={to} {...props}
      activeStyle={{
        color: activeColor
      }} />} color="inherit" />
}

let ActiveListItem = ({ activeColor, to, ...props }: any) => {
  return <ListItem button style={{ color: "rgba(0, 0, 0, 0.54)" }} {...props} component={props => <Link exact to={to} {...props} activeStyle={{
    color: activeColor
  }} />} />
}

class Header extends React.Component<any, { isDrawerOpen: boolean }> {
  state = {
    isDrawerOpen: false,
  };

  handleOpen = (event: any) => {
    this.setState({ isDrawerOpen: true });
  };

  handleClose = () => {
    this.setState({ isDrawerOpen: false });
  };


  render() {
    const { classes, theme } = this.props
    const { isDrawerOpen } = this.state;

    return <div className={classes.root} >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="headline" color="inherit" className={classes.flex}>
            <img src={logo} alt="Serafin Labs" style={{ position: "absolute", display: "block", top: "-2.33rem", left: "-2.22rem", width: "4.44rem" }} />
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Serafin Labs</Link>
          </Typography>

          <Hidden smDown>
            <ActiveButton to="/saas" activeColor={theme.palette.secondary.main}>
              <CloudIcon className={classes.leftIcon} />
              SaaS
            </ActiveButton>
          </Hidden>
          <Hidden smDown>
            <ActiveButton to="/open-source" activeColor={theme.palette.secondary.main}>
              <StarIcon className={classes.leftIcon} />
              Open Source
            </ActiveButton>
          </Hidden>
          <Hidden smDown>
            <ActiveButton to="/consulting" activeColor={theme.palette.secondary.main}>
              <LaptopMacIcon className={classes.leftIcon} />
              Consulting
            </ActiveButton>
          </Hidden>
          <Hidden smDown>
            <ActiveButton to="/team" activeColor={theme.palette.secondary.main}>
              <PeopleIcon className={classes.leftIcon} />
              Team
            </ActiveButton>
          </Hidden>

          <Hidden mdUp>
            <IconButton onClick={this.handleOpen} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Drawer anchor="right" open={isDrawerOpen} onClose={this.handleClose}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.handleClose}
              onKeyDown={this.handleClose}
            >
              <div className={classes.sideList}>
                <List component="nav">
                  <ActiveListItem button to="/" activeColor={theme.palette.secondary.main}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ActiveListItem>
                  <Divider />
                  <ActiveListItem button to="/saas" activeColor={theme.palette.secondary.main}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <CloudIcon />
                    </ListItemIcon>
                    <ListItemText primary="SaaS" />
                  </ActiveListItem>
                  <ActiveListItem button to="/open-source" activeColor={theme.palette.secondary.main}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Open Source" />
                  </ActiveListItem>
                  <ActiveListItem button to="/consulting" activeColor={theme.palette.secondary.main}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText primary="Consulting" />
                  </ActiveListItem>
                  <ActiveListItem button to="/team" activeColor={theme.palette.secondary.main}>
                    <ListItemIcon style={{ color: "inherit" }}>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Team" />
                  </ActiveListItem>
                </List>
              </div>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div >
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
  }
}

export default withStyles<any>((theme: any): any => ({
  root: {
    width: '100%',
    paddingTop: "3.67rem"
  },
  flex: {
    flex: 1,
    position: "relative",
    marginTop: "1.66rem",
    marginLeft: "1.39rem"
  },
  sideList: {
    width: 250,
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
}))(withTheme()(Header));
