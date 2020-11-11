/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TUJKO S.C. - Specjalistyczny Zakład Naprawy Felg`,
    description: `TUJKO S.C. Specjalistyczny Zakład Naprawy Felg. Sprzedaż felg i opon. Wulkanizacja. Wyważanie z optymalizacją geometryczną. Naprawa i regeneracja felg stalowych i aluminiowych, polerowanie.`,
    author: `miszad89`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TUJKO S.C. - Specjalistyczny Zakład Naprawy Felg`,
        short_name: `TUJKO S.C.`,
        start_url: `/`,
        background_color: `#dfdedf`,
        theme_color: `#8f3338`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
