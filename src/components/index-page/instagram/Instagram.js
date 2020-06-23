import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../instagram/instagram.module.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Background from '../instaBackgroundImage/Background';

const query = graphql`
	query {
		allInstaNode(limit: 5, sort: { fields: timestamp, order: DESC }) {
			edges {
				node {
					timestamp
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;

export default function Instagram() {
	const data = useStaticQuery(query);

	return (
		<Col xs={12} className={styles.holder} id="contact">
			<Row>
				<Col xs={12}>
					<h2 className={styles.hashtag}>#tahinawilcza</h2>
					<p className={styles.CTA}>
						<a
							href="https://www.instagram.com/tahinawilcza/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							FOLLOW US ON INSTAGRAM!
						</a>
					</p>
				</Col>
				<Col xs={12} className={styles.instagram}>
					<Carousel
						slidesPerScroll={1}
						slidesPerPage={4}
						autoPlay={3500}
						animationSpeed={1300}
						infinite
						breakpoints={{
							425: {
								slidesPerPage: 1,
								arrows: false
							},
							576: {
								slidesPerPage: 1,
								arrows: false
							},
							800: {
								slidesPerPage: 2,
								arrows: false
							},
							992: {
								slidesPerPage: 3,
								arrows: false
							},
							1300: {
								slidesPerPage: 4,
								arrows: false
							}
						}}
					>
						{/* {data.allInstaNode.edges.map((image) => (
							<Background
								src={image.node.localFile.childImageSharp.fluid}
								className="img-fluid"
								height="38vh"
								width="100%"
							/>
						))} */}
					</Carousel>
				</Col>
			</Row>
		</Col>
	);
}
