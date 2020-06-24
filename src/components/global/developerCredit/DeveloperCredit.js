import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../developerCredit/developerCredit.module.css';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

export default function DeveloperCredit() {
	return (
		<Col className={styles.holder}>
			<p>
				{<FormattedMessage id="madeBy" />}
				<a href="http://kishokanth.com/" target="_blank" rel="noopener noreferrer" className={styles.name}>
					KISHOKANTH
				</a>
			</p>
		</Col>
	);
}
