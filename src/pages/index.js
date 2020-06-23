import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/global/layout/Layout';
import { injectIntl } from 'gatsby-plugin-intl';

const IndexPage = ({ data, intl }) => <Layout>{console.log(data)}</Layout>;

export const query = graphql`
	query ContentfulHomePage($locale: String) {
		allContentfulHomePage(filter: { node_locale: { eq: $locale } }) {
			nodes {
				coverImage {
					coverImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					coverImageAlt: title
				}
				aboutUsTitle
				aboutUsText {
					aboutUsText
				}
				ourPhilosophyTitle
				ourPhilosophyText {
					ourPhilosophyText
				}
				ourPhilosophyTitle
				ourPhilosophyLink
				ourPhilosophyImage {
					ourPhilosophyImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					ourPhilosophyImageAlt: title
				}
				menuTitle
				menuText {
					menuText
				}
				menuImage {
					menuImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					menuImageAlt: title
				}
				menuLink
				tahinaPrivateTitle
				tahinaPrivateText {
					tahinaPrivateText
				}
				tahinaPrivateLink
				tahinaPrivateImage {
					tahinaPrivateImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					tahinaPrivateImageAlt: title
				}
				theTeamTitle
				theteamText: theTeam {
					theTeam
				}
				theTeamLink
				theTeamImage {
					theTeamImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					theTeamImageAlt: title
				}
				ourBlogTitle
				ourBlogText {
					ourBlogText
				}
				ourBlogLink
				ourBlogImage {
					ourBlogImageSrc: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					ourBlogImageAlt: title
				}
			}
		}
	}
`;

export default injectIntl(IndexPage);
