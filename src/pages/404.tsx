import * as React from "react";
import Typography from "material-ui/Typography/Typography";
import ErrorIcon from 'material-ui-icons/Error';
import HomeIcon from 'material-ui-icons/Home';
import Button from "material-ui/Button/Button";
import withStyles from "material-ui/styles/withStyles";
import { Link } from "react-router-dom";

export default withStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  }
}))(({ classes }: any) =>
  <div style={{ paddingTop: "2rem", textAlign: "center" }}>
    <Typography variant="display1" color="error" align="center">
      <ErrorIcon style={{ width: "5rem", height: "5rem" }} />
      <div>Error 404</div>
    </Typography>
    <h2>You weren't supposed to see this page...</h2>
    <div>
      <Button variant="raised" color="secondary" className={classes.homeButton} component={props => <Link to="/" {...props} />}>
        <HomeIcon className={classes.leftIcon} />
        Bring me back home
      </Button>
    </div>
  </div >)

