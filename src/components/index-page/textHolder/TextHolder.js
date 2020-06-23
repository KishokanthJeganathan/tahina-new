import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../textHolder/textHolder.module.css';
import { Link } from 'gatsby';

export default function TextHolder({ content, title, bgColor, CTA, link }) {
	return (
		<Col xs={12}>
			<Row className={styles.textHolder} style={{ backgroundColor: bgColor }}>
				<Col xs={12}>
					<h2>{title}</h2>
					<p className={styles.content}>{content}</p>
					<Link to={link} className={styles.link}>
						{CTA}
					</Link>
				</Col>
			</Row>
		</Col>
	);
}
