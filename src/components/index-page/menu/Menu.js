import React from 'react';
import TextHolder from '../textHolder/TextHolder';
import BackgroundImage from 'gatsby-background-image';
import styles from '../menu/menu.module.css';
import { Col, Row } from 'react-bootstrap';

export default function Menu({ title, content, image, bgColor, link, alt, btnText }) {
	return (
		<section id="menu">
			<Col>
				<Row>
					<Col xs={12} md={6} className={styles.img}>
						{/* <BackgroundImage fluid={image} alt={alt} slug={link} style={{ height: '60vh' }} /> */}
						<BackgroundImage fluid={image} alt={alt} slug="/" style={{ height: '60vh' }} />
					</Col>
					<Col xs={12} md={6} className={styles.contentHolder} style={{ backgroundColor: bgColor }}>
						<TextHolder content={content} title={title} link={link} CTA={btnText} />
					</Col>
				</Row>
			</Col>
		</section>
	);
}
