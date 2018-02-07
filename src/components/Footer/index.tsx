import * as React from 'react'
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';

class Footer extends React.Component<any, any> {

    render() {
        const { classes } = this.props
        return <footer className={classes.footer}>

            <Typography variant="subheading" color="inherit" align="center">
                Serafin Labs ©{new Date().getFullYear()}
            </Typography>
        </footer>
    }
}

export default withStyles((theme: any) => ({
    footer: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        padding: "2rem"
    }
}))(Footer)