require('dotenv').config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		title: 'Tahina',
		titleTemplate: '%s | Tahina.pl',
		description: 'Welcome to Tahina',
		siteUrl: 'http://localhost:8000', // No trailing slash allowed!
		image: 'https://i.ibb.co/T4nfB1c/Landing-page-image.jpg',
		twitterUsername: '@kishojegan',
		author: 'Tahina'
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
				// option to redirect to `/pl` when connecting `/`
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
				paths: [ '/en/blog/**', '/pl/blog/**' ],
				// Configure the z-index of the indicator element
				zIndex: `9999`
			}
		}
	]
};
