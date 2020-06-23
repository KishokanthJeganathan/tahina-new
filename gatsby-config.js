require('dotenv').config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `kalmr4i5zs2t`,
				accessToken: `fnKH4mhgmYgrWOFpOvP7OZy-Aeo08ae3Avm9XGyqLAo`
			}
		},
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: [ `en`, `pl` ],
				// language file path
				defaultLanguage: `pl`,
				// option to redirect to `/en` when connecting `/`
				redirect: true
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
