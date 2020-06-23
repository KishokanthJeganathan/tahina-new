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
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `9ou7fcz5tspg`,
				accessToken: `DWaTcUoOrT-CuvfvAl9DevbW4ZCRcxVRLkooEL-4lYE`
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
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `8296027164`
			}
		},
		{
			resolve: `gatsby-plugin-scroll-indicator`,
			options: {
				// Configure color of the scroll indicator
				color: '#0eb398b9',
				// Height of the scroll indicator
				height: '5px',
				// Configure paths where the scroll indicator will appear
				paths: [ '/blog/**' ],
				// Configure the z-index of the indicator element
				zIndex: `9999`
			}
		}
	]
};
