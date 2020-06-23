import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../blogSnippet/blogSnippet.module.css';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function BlogSnippet({ src, alt, title, slug, xs, sm, lg }) {
	return (
		<Col xs={xs} sm={sm} lg={lg} className={styles.blogSnippet}>
			<Link to={`blog/${slug}`} className={styles.blogSnippetHolder}>
				<Img fluid={src} alt={alt} />

				<h2>{title}</h2>
			</Link>
		</Col>
	);
}
