import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../developerCredit/developerCredit.module.css';

export default function DeveloperCredit() {
	return (
		<Col className={styles.holder}>
			<p>
				MADE BY
				<a href="http://kishokanth.com/" target="_blank" rel="noopener noreferrer" className={styles.name}>
					KISHOKANTH
				</a>
			</p>
		</Col>
	);
}
