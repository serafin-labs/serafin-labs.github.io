import * as React from 'react'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import { createMuiTheme, withStyles, withTheme } from 'material-ui/styles';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "./main.css";

const logo = require('../../static/images/apple-icon-57x57.png')

// https://material.io/color/#!/?view.left=0&view.right=0&primary.color=37474F&secondary.color=29B6F6
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#fff',
    },
    secondary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
      contrastText: '#fff',
    },
  },
});

const TemplateWrapper: any = ({ children, data, location }: any) => {
  let hero = null;
  switch (location.pathname) {
    case '/':
      hero = data.site.siteMetadata.hero.home;
      break;
    case '/saas':
    case '/saas/':
      hero = data.site.siteMetadata.hero.saas;
      break;
    case '/open-source':
    case '/open-source/':
      hero = data.site.siteMetadata.hero.openSource;
      break;
    case '/consulting':
    case '/consulting/':
      hero = data.site.siteMetadata.hero.consulting;
      break;
    case '/team':
    case '/team/':
      hero = data.site.siteMetadata.hero.team;
      break;
    default:
      hero = null;
  }
  return <MuiThemeProvider theme={theme}>
    <div style={{}}>
      <Reboot />
      <Helmet
        title="Serafin Labs"
        meta={[
          { name: 'description', content: 'Serafin Labs Website' },
          { name: 'keywords', content: 'API, Open API' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
          { name: 'charset', content: 'utf-8' }
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' },
          //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
          { rel: 'apple-touch-icon', size: '57x57', href: logo }
        ]}
      />

      <Header />
      {hero && <Hero color={hero.color} subtitle={hero.subtitle} title={hero.title} classes={{}} />}
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          minHeight: "100%",
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </div>
  </MuiThemeProvider>

}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const pageQuery = graphql`
  query LayoutQuery {
    sitePage {
      path
    }
    site {
      siteMetadata {
        hero {
          home {
            title
            subtitle
            color
          }
          saas {
            title
            subtitle
            color
          }
          openSource {
            title
            subtitle
            color
          }
          consulting {
            title
            subtitle
            color
          }
          team {
            title
            subtitle
            color
          }
        }
      }
    }
  }
`;
