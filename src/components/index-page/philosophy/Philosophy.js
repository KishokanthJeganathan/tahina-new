import React from 'react';
import TextHolder from '../textHolder/TextHolder';
import menuStyles from '../menu/menu.module.css';
import styles from '../philosophy/philosophy.module.css';
import { Col, Row } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

export default function Philosophy({ title, content, image, bgColor, link, alt, btnText }) {
	return (
		<Col xs={12} id="philosophy">
			<Row className={styles.row}>
				<Col xs={12} md={6} className={`${menuStyles.img} ${styles.img}`}>
					<BackgroundImage fluid={image} alt={alt} style={{ height: '60vh' }} />
				</Col>
				<Col
					xs={12}
					md={6}
					className={`${menuStyles.contentHolder} ${styles.text}`}
					style={{ backgroundColor: bgColor }}
				>
					<TextHolder content={content} title={title} bgColor={bgColor} link={link} CTA={btnText} />
				</Col>
			</Row>
		</Col>
	);
}
