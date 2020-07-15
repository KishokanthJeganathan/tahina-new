import React from 'react';
import styles from '../footer/footer.module.css';
import Map from '../map/Map';
import DeveloperCredit from '../developerCredit/DeveloperCredit';
import { graphql, useStaticQuery } from 'gatsby';
import CookieConsent from 'react-cookie-consent';
import { FormattedMessage } from 'gatsby-plugin-intl';

const query = graphql`
	query {
		allContentfulHomePage {
			nodes {
				tahinaAddress
				tahinaFacebookLink
				tahinaPhoneNumber
			}
		}
	}
`;

export default function Footer() {
	const data = useStaticQuery(query);

	const { tahinaAddress, tahinaFacebookLink, tahinaPhoneNumber } = data.allContentfulHomePage.nodes[0];

	return (
		<footer className={styles.footer}>
			<Map facebookSlug={tahinaFacebookLink} phoneNumber={tahinaPhoneNumber} address={tahinaAddress} />
			<DeveloperCredit />
			<CookieConsent
				style={{ background: 'white', color: 'black' }}
				buttonClasses="m-0 mb-1"
				containerClasses=" text-center"
				expires={365}
				cookieName="gatsby-gdpr-google-analytics"
				buttonText="Okay"
				buttonWrapperClasses=" text-center container-fluid"
				buttonStyle={{ background: 'white', border: '1px solid black', color: 'black' }}
			>
				{<FormattedMessage id="cookies" />}
			</CookieConsent>
		</footer>
	);
}
