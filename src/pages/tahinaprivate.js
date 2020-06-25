import React from 'react';
import Layout from '../components/global/layout/Layout';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import ImageSlider from '../components/tahina-private-page/imageSlider/ImageSlider';
import AboutUs from '../components/index-page/aboutUs/AboutUs';

const TahinaPrivate = ({ data }) => {
	const { coverImage } = data.allContentfulTahinaPrivatePage.nodes[0];

	return (
		<Layout textColor="white">
			<ImageSlider images={coverImage} />
			<AboutUs
				title="ABOUT TAHINA PRIVATE"
				content="SITUATED IN THE CENTER OF THE BUSTLING CITY OF WARSAW, TAHINA IS AN OASIS FOR THOSE SEEKING AUTHENTIC MIDDLE-EASTERN CUISINE. COME JOIN US FOR GREAT FOOD, WOLF IT DOWN WITH SOME SAND COFFEE AND HAVE A CAKE BEFORE YOU SAY GOODBYE."
			/>
		</Layout>
	);
};

export const query = graphql`
	query ContentfulTahinaPrivatePage($locale: String) {
		allContentfulTahinaPrivatePage(filter: { node_locale: { eq: $locale } }) {
			nodes {
				coverImage {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
			}
		}
	}
`;

export default injectIntl(TahinaPrivate);
