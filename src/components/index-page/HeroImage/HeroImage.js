import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styles from '../HeroImage/heroImage.module.css';
import { Col, Row } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FormattedMessage } from 'gatsby-plugin-intl';

export default function Home({ fluid, alt }) {
	return (
		<BackgroundImage
			Tag="section"
			fluid={fluid}
			alt={alt}
			style={{ width: '100vw', height: '105vh', marginTop: '-6rem' }}
			id="home"
		>
			<Col>
				<Row>
					<Col className={styles.heroImage}>
						<Row>
							<Col xs={12}>
								<h1 className={styles.brand}>TAHINA</h1>
							</Col>
							<Col xs={12} className={styles.linkHolder}>
								<button className={styles.link} onClick={() => scrollTo('#philosophy')}>
									{<FormattedMessage id="philosophy" />}
								</button>
								{/* <button className={styles.link} onClick={() => scrollTo('#menu')}>
									{<FormattedMessage id="menu" />}
								</button> */}
								<button className={styles.link} onClick={() => scrollTo('#contact')}>
									{<FormattedMessage id="contact" />}
								</button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</BackgroundImage>
	);
}
