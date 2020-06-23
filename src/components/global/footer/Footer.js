import React from 'react';
import styles from '../footer/footer.module.css';
import Map from '../map/Map';
import DeveloperCredit from '../developerCredit/DeveloperCredit';
import { graphql, useStaticQuery } from 'gatsby';

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
		</footer>
	);
}
