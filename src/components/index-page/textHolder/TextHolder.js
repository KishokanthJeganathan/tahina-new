import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../textHolder/textHolder.module.css';
import { Link } from 'gatsby';

export default function TextHolder({ content, title, bgColor, CTA, link }) {
	return (
		<Col xs={12}>
			<Row className={styles.textHolder} style={{ backgroundColor: bgColor }}>
				<Col xs={12}>
					<h2 className={styles.h1}>{title}</h2>
					<p className={styles.content}>{content}</p>
					{CTA && link ? (
						<Link to={link} className={styles.link}>
							{CTA}
						</Link>
					) : (
						<a href="https://tahina-restaurant.myshopify.com/" className={styles.link}>
							{CTA}
						</a>
					)}
				</Col>
			</Row>
		</Col>
	);
}
