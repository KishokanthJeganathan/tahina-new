import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import styles from '../socialSharing/socialSharing.module.css';

export default function SocialSharing({ slug }) {
	return (
		<Col>
			<Row className={styles.shareButtonHolder}>
				<Col xs={3} sm={2} className={styles.iconHolder}>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.kishokanth.com/blog/${slug}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on Facebook"
					>
						<FaFacebookSquare style={{ fontSize: '2rem', color: '#3b5998' }} />
					</a>
				</Col>
				<Col xs={3} sm={2} className={styles.iconHolder}>
					<a
						className="resp-sharing-button__link"
						href={`https://twitter.com/intent/tweet?text=https%3A//www.kishokanth.com/blog/${slug}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share on Twitter"
					>
						<FaTwitterSquare style={{ fontSize: '2rem', color: '#1DA1F2' }} />
					</a>
				</Col>
				<Col xs={3} sm={2} className={styles.iconHolder}>
					<a
						className="resp-sharing-button__link"
						href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.kishokanth.com/blog/${slug}&title=&summary=&source=`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share on LinkedIn"
					>
						<FaLinkedin style={{ fontSize: '2rem', color: ' #0072b1' }} />
					</a>
				</Col>
			</Row>
		</Col>
	);
}
