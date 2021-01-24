module.exports = {
  siteMetadata: {
    title: `DW Interactive Dev`,
    description: `This is the official site for DW Interactive Dev where websites are made modern and performant`,
    author: `Dwan W.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/img`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DW-dev`,
        short_name: `DW`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/logo.png`,
      },
    },
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: [`work sans`],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload",
          as: "style",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us2.list-manage.com/subscribe/post?u=b9534d380f45405c93f212408&amp;id=aa3682903e",
        timeout: 3500,
      },
    },
    {
      resolve: "gatsby-plugin-crisp-chat",
      options: {
        websiteId: "d99b4324-67ee-4892-922a-d24d3cf56593",
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: false, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: true, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-netlify-cms',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
