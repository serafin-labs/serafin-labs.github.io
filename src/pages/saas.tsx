import * as React from 'react'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography/Typography';
import WhatshotIcon from 'material-ui-icons/Whatshot';
import AppearingTypography from '../components/Animations/AppearingTypography';

const SaaSPage = ({ data }: any) => {
  return <div style={{ paddingTop: "4rem" }}>
    <AppearingTypography delay={300} variant="headline" color="inherit" style={{ textAlign: "center" }}>
      <WhatshotIcon />
      More details coming soon
    </AppearingTypography>
  </div>
}

export default SaaSPage

