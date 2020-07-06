import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../blogSnippet/blogSnippet.module.css';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export default function BlogSnippet({ src, alt, title, slug, xs, sm, lg }) {
	return (
		<Col xs={xs} sm={sm} lg={lg} className={styles.blogSnippet}>
			<Link to={`blog/${slug}`} className={styles.blogSnippetHolder}>
				<BackgroundImage fluid={src} alt={alt} style={{ height: '40vh' }} />
				<h2>{title}</h2>
			</Link>
		</Col>
	);
}
