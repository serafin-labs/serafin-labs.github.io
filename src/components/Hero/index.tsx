import * as React from 'react'
import * as PropTypes from 'prop-types';
import Typography from 'material-ui/Typography/Typography';
import withStyles from 'material-ui/styles/withStyles';
import { Theme } from 'material-ui/styles/createMuiTheme';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import AppearingTypography from '../Animations/AppearingTypography';
import Fade from '../Animations/Fade';
import Appear from '../Animations/Appear';


class Hero extends React.Component<{ color: string, title: string, subtitle: string, classes: any }> {

    render() {
        const { title, subtitle, classes, color } = this.props


        return <div className={classes.root}>
            <TransitionGroup style={{ position: "absolute", width: "100%", height: "100%" }}>
                <Fade key={color} delay={0} style={{ position: "absolute", width: "100%", height: "100%" }}>
                    <div style={{ width: "100%", height: "100%", background: color }} />
                </Fade>
            </TransitionGroup>
            <div>
                <AppearingTypography delay={100} key={title} variant="display1" color="inherit" align="center">
                    {title}
                </AppearingTypography>
                <AppearingTypography delay={200} key={subtitle} variant="headline" color="inherit" align="center">
                    {subtitle}
                </AppearingTypography>
            </div>
        </div >
    }

    static propTypes = {
        classes: PropTypes.object.isRequired
    }
}

export default withStyles<any>((theme: Theme) => ({
    root: {
        position: "relative",
        width: '100%',
        padding: '3rem 0',
        minHeight: "16rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transitionProperty: "background-color",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease-in-out",
        [theme.breakpoints.down('xs')]: {
            minHeight: 'auto',
        }
    }
}))(Hero)