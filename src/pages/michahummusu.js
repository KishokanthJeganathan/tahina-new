import React from 'react';
import Layout from '../components/global/layout/Layout';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import ImageSlider from '../components/tahina-private-page/imageSlider/ImageSlider';
import AboutUs from '../components/index-page/aboutUs/AboutUs';
import Philosophy from '../components/index-page/philosophy/Philosophy';
import Form from '../components/tahina-private-page/form/Form';
import Team from '../components/index-page/team/Team';
import Blog from '../components/index-page/blog/Blog';
import SEO from '../components/global/seo';

const Michahummusu = ({ data }) => {
	const {
		coverImage,
		coverImageContent: { coverImageContent },
		pageNamePart1,
		pageNamePart2,
		aboutText,
		aboutTitle,
		area1Title,
		area1Text: { area1Text },
		area1Image: { area1Image },
		area2Title,
		area2Text: { area2Text },
		area2Image: { area2Image },
		area3Title,
		area3Text,
		area3Image: { area3Image },
		formTelephone,
		formSubmitSuccessMessage,
		formSubmitFailureMessage,
		formSubmitButtonText,
		formNumberOfPeople,
		formName,
		formDate,
		formTitle,
		metaDescription,
		formCta: { formCta },
		bottomImages,
		bottomImageContent: { bottomImageContent },
		formConsentText
	} = data.allContentfulTahinaPrivatePage.nodes[0];

	return (
		<Layout textColor="white">
			<SEO title="TAHINA PRYWATNA" description={metaDescription} image={coverImage[0].fluid.src} />

			<ImageSlider
				images={coverImage}
				marginTop="-6rem"
				height="102vh"
				content={coverImageContent}
				title1={pageNamePart1}
				title2={pageNamePart2}
			/>
			<AboutUs title={aboutTitle} content={aboutText} />
			<Philosophy title={area1Title} content={area1Text} image={area1Image} bgColor="#e7eaec" />
			<Team title={area2Title} content={area2Text} image={area2Image} bgColor="#0eb398b9" />
			<Philosophy title={area3Title} content={area3Text} image={area3Image} bgColor="#938051" />

			{/* <Form
				title={formTitle}
				CTA={formCta}
				namePlaceholder={formName}
				telephonePlaceholder={formTelephone}
				datePlaceholder={formDate}
				guestNumPlaceholder={formNumberOfPeople}
				successMessege={formSubmitSuccessMessage}
				failureMessege={formSubmitFailureMessage}
				submitText={formSubmitButtonText}
				consentText={formConsentText}
			/> */}
			<ImageSlider
				images={bottomImages}
				height="60vh"
				content={bottomImageContent}
				title1={pageNamePart1}
				title2={pageNamePart2}
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
				aboutTitle
				metaDescription
				aboutText
				area1Image {
					area1Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
				area1Title
				area1Text {
					area1Text
				}
				area2Image {
					area2Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
				area2Text {
					area2Text
				}
				area2Title
				area3Image {
					area3Image: fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
				area3Text
				area3Title
				pageNamePart1
				pageNamePart2
				coverImageContent {
					coverImageContent
				}
				bottomImages {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyContentfulFluid
					}
					title
				}
				bottomImageContent {
					bottomImageContent
				}
				formCta {
					formCta
				}
				formTelephone
				formSubmitSuccessMessage
				formSubmitFailureMessage
				formSubmitButtonText
				formNumberOfPeople
				formName
				formDate
				formTitle
				formConsentText
			}
		}
	}
`;

export default injectIntl(Michahummusu);
