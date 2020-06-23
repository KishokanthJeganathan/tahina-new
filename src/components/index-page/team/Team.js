import React from 'react';
import TextHolder from '../textHolder/TextHolder';
import styles from '../team/team.module.css';
import { Col, Row } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

export default function Team({ title, content, image, bgColor, link, alt, btnText }) {
	return (
		<Col xs={12}>
			<Row>
				<Col xs={12} md={6} className={styles.img}>
					<BackgroundImage fluid={image} alt={alt} style={{ height: '60vh' }} />
				</Col>
				<Col xs={12} md={6} className={styles.contentHolder} style={{ backgroundColor: bgColor }}>
					<TextHolder content={content} title={title} link={link} CTA={btnText} />
				</Col>
			</Row>
		</Col>
	);
}
