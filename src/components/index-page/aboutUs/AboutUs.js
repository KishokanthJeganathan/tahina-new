import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../aboutUs/aboutUs.module.css';

export default function TextHolder({ title, content }) {
	return (
		<Col xs={12} id="about">
			<Row className={styles.textHolder}>
				<Col xs={12} sm={8} md={8}>
					<h2>{title.toUpperCase()}</h2>
					<p className={styles.content}>{content.toUpperCase()}</p>
				</Col>
			</Row>
		</Col>
	);
}
