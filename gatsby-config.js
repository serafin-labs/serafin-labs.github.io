module.exports = {
  siteMetadata: {
    title: 'Serafin Labs',
    hero: {
      home: {
        title: "Serafin Labs",
        subtitle: "API first development",
        color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
      },
      saas: {
        title: "Serafin Genesis SaaS",
        subtitle: "The API Content Management System",
        color: "linear-gradient(45deg, #00c9ff 30%, #92fe9d 90%)" /* https://uigradients.com/#BackToEarth */
      },
      openSource: {
        title: "Serafin Node.js API Framework",
        subtitle: "By developers for developers",
        color: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)"
      },
      consulting: {
        title: "API Experts",
        subtitle: "At your fingertips",
        color: "linear-gradient(45deg, #00d2ff 30%, #3a7bd5 90%)"
      },
      team: {
        title: "A team of API experts",
        subtitle: "The heroes you deserve",
        color: "linear-gradient(45deg, #92fe9d 30%, #00c9ff 90%)"
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113784153-1"
      },
    }
  ],
};
