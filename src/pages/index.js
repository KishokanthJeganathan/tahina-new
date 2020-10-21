import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout/Layout';
import { injectIntl } from 'gatsby-plugin-intl';
import HeroImage from '../components/index-page/HeroImage/HeroImage';
import AboutUs from '../components/index-page/aboutUs/AboutUs';
import Menu from '../components/index-page/menu/Menu';
import TahinaPrivate from '../components/index-page/tahinaPrivate/TahinaPrivate';
import Philosophy from '../components/index-page/philosophy/Philosophy';
import Team from '../components/index-page/team/Team';
import NewsLetter from '../components/global/newsLetter/NewsLetter';
import SEO from '../components/global/seo';
import InstagramCarousal from '../components/index-page/instagram-carousal/InstagramCarousal';

const IndexPage = ({ data }) => {
	const {
		coverImage: { coverImageAlt, coverImageSrc },
		aboutUsText: { aboutUsText },
		aboutUsTitle,
		ourPhilosophyImage: { ourPhilosophyImageAlt, ourPhilosophyImageSrc },
		ourPhilosophyLink,
		ourPhilosophyTitle,
		ourPhilosophyText: { ourPhilosophyText },
		menuImage: { menuImageAlt, menuImageSrc },
		menuLink,
		menuText: { menuText },
		menuTitle,
		tahinaPrivateImage: { tahinaPrivateImageAlt, tahinaPrivateImageSrc },
		tahinaPrivateLink,
		tahinaPrivateText: { tahinaPrivateText },
		tahinaPrivateTitle,
		theteamText: { theTeam },
		theTeamTitle,
		theTeamLink,
		theTeamImage: { theTeamImageAlt, theTeamImageSrc },
		ourBlogImage: { ourBlogImageAlt, ourBlogImageSrc },
		ourBlogLink,
		ourBlogText: { ourBlogText },
		ourBlogTitle,
		newsletterBtnText,
		newsletterCallToAction,
		newsletterConsentText,
		newsletterEmailAddressPlaceholder,
		newsletterFirstNamePlaceholder,
		newsletterLastNamePlaceholder,
		newsletterMobilePlaceholder,
		newsletterTitle,
		menuBtnText,
		ourBlogBtnText,
		ourPhilosophyBtnText,
		tahinaPrivateBtnText,
		theTeamBtnText,
		metaDescription
	} = data.allContentfulHomePage.nodes[0];

	return (
		<Layout textColor="white">
			<SEO title="Witamy w Tahina" description={metaDescription} image={coverImageSrc.src} />

			<HeroImage fluid={coverImageSrc} alt={coverImageAlt} />
			<AboutUs title={aboutUsTitle} content={aboutUsText} />
			<Philosophy
				title={ourPhilosophyTitle}
				content={ourPhilosophyText}
				image={ourPhilosophyImageSrc}
				bgColor="#e7eaec"
				link={ourPhilosophyLink}
				alt={ourPhilosophyImageAlt}
				btnText={ourPhilosophyBtnText}
			/>
			<Menu
				title={menuTitle}
				content={menuText}
				image={menuImageSrc}
				alt={menuImageAlt}
				bgColor="#0eb398b9"
				btnText={menuBtnText}
			/>
			<TahinaPrivate
				title={tahinaPrivateTitle}
				content={tahinaPrivateText}
				image={tahinaPrivateImageSrc}
				link={tahinaPrivateLink}
				alt={tahinaPrivateImageAlt}
				bgColor="#938051b6"
				btnText={tahinaPrivateBtnText}
			/>
			<Team
				title={theTeamTitle}
				content={theTeam}
				image={theTeamImageSrc}
				link={theTeamLink}
				alt={theTeamImageAlt}
				bgColor="#e7eaec"
				btnText={theTeamBtnText}
			/>

			<TahinaPrivate
				title={ourBlogTitle}
				content={ourBlogText}
				image={ourBlogImageSrc}
				link={ourBlogLink}
				alt={ourBlogImageAlt}
				bgColor="#0eb398b9"
				btnText={ourBlogBtnText}
			/>
			<NewsLetter
				newsletterTitle={newsletterTitle}
				newsletterCTA={newsletterCallToAction}
				consentText={newsletterConsentText}
				firstName={newsletterFirstNamePlaceholder}
				lastName={newsletterLastNamePlaceholder}
				emailAddress={newsletterEmailAddressPlaceholder}
				mobile={newsletterMobilePlaceholder}
				btnText={newsletterBtnText}
			/>

			<InstagramCarousal />
		</Layout>
	);
};

export const query = graphql`
	query ContentfulHomePage($locale: String) {
		allContentfulHomePage(filter: { node_locale: { eq: $locale } }) {
			nodes {
				newsletterBtnText
				newsletterCallToAction
				newsletterConsentText
				newsletterEmailAddressPlaceholder
				newsletterFirstNamePlaceholder
				newsletterLastNamePlaceholder
				newsletterMobilePlaceholder
				newsletterTitle
				menuBtnText
				ourBlogBtnText
				ourPhilosophyBtnText
				tahinaPrivateBtnText
				theTeamBtnText
				metaDescription
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
