import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styles from '../background/background.module.css';
import { Col } from 'react-bootstrap';

export default function Background({ fluid, alt, slug, title, id, content }) {
	return (
		<BackgroundImage Tag="section" fluid={fluid} alt={alt} style={{ width: '100vw', height: '60vh' }} id={`#${id}`}>
			<Col className={styles.content}>
				<h1>{title}</h1>
				<p>{content}</p>
			</Col>
		</BackgroundImage>
	);
}
