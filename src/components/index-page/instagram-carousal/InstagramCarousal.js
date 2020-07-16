import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../instagram-carousal/instagramCarousal.module.css';
import Background from '../instaBackgroundImage/Background';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';

const query = graphql`
	query {
		allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
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
	const instapostsNotNull = [];

	const instaPosts = () => {
		data.allInstaNode.edges.forEach((post) => {
			if (post.node.localFile !== null) {
				return instapostsNotNull.push(post);
			}
		});
	};

	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

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
							{<FormattedMessage id="instagram" />}
						</a>
					</p>
				</Col>
				{instaPosts()}

				<Col xs={12} className={styles.instagram}>
					<Slider {...settings}>
						{instapostsNotNull.map((image) => (
							<div>
								<a
									href="https://www.instagram.com/tahinawilcza/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Background
										src={image.node.localFile.childImageSharp.fluid}
										height="35vh"
										key={uuidv4()}
									/>
								</a>
							</div>
						))}
					</Slider>
				</Col>
			</Row>
		</Col>
	);
}
