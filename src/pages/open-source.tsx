import * as React from 'react'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography/Typography';
import WhatshotIcon from 'material-ui-icons/Whatshot';

const OpenSourcePage = ({ data }: any) => {
  return <div style={{ paddingTop: "4rem" }}>
    <Typography variant="headline" color="inherit" style={{ textAlign: "center" }}>
      <WhatshotIcon />
      More details coming soon
    </Typography>
  </div>
}

export default OpenSourcePage

