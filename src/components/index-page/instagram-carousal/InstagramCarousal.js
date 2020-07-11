import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../instagram-carousal/instagramCarousal.module.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Background from '../instaBackgroundImage/Background';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

				<Col xs={12} className={styles.instagram}>
					<Slider {...settings}>
						{data.allInstaNode.edges.map((image) => (
							<div>
								<a
									href="https://www.instagram.com/tahinawilcza/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Background src={image.node.localFile.childImageSharp.fluid} height="35vh" />
								</a>
							</div>
						))}
					</Slider>
				</Col>
			</Row>
		</Col>
	);
}

// export default function Instagram() {
// 	const data = useStaticQuery(query);

// 	return (
// 		<Col xs={12} className={styles.holder} id="contact">
// 			<Row>
// 				<Col xs={12}>
// 					<h2 className={styles.hashtag}>#tahinawilcza</h2>
// 					<p className={styles.CTA}>
// 						<a
// 							href="https://www.instagram.com/tahinawilcza/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className={styles.link}
// 						>
// 							{<FormattedMessage id="instagram" />}
// 						</a>
// 					</p>
// 				</Col>

// 				<Col xs={12}>
// 					<Row className={styles.imageHolder}>
// 						<Col xs={8} sm={6} md={4} lg={3} className={styles.image1}>
// 							<a href="https://www.instagram.com/tahinawilcza/" target="_blank" rel="noopener noreferrer">
// 								<BackgroundImage
// 									fluid={data.allInstaNode.edges[0].node.localFile.childImageSharp.fluid}
// 									style={{ height: '30vh' }}
// 								/>
// 							</a>
// 						</Col>
// 						<Col xs={8} sm={6} md={4} lg={3} className={styles.image2}>
// 							<a href="https://www.instagram.com/tahinawilcza/" target="_blank" rel="noopener noreferrer">
// 								<BackgroundImage
// 									fluid={data.allInstaNode.edges[1].node.localFile.childImageSharp.fluid}
// 									style={{ height: '30vh' }}
// 								/>
// 							</a>
// 						</Col>
// 						<Col xs={8} sm={6} md={4} lg={3} className={styles.image3}>
// 							<a href="https://www.instagram.com/tahinawilcza/" target="_blank" rel="noopener noreferrer">
// 								<BackgroundImage
// 									fluid={data.allInstaNode.edges[2].node.localFile.childImageSharp.fluid}
// 									style={{ height: '30vh' }}
// 								/>
// 							</a>
// 						</Col>
// 						<Col xs={8} sm={6} md={4} lg={3} className={styles.image4}>
// 							<a href="https://www.instagram.com/tahinawilcza/" target="_blank" rel="noopener noreferrer">
// 								<BackgroundImage
// 									fluid={data.allInstaNode.edges[3].node.localFile.childImageSharp.fluid}
// 									style={{ height: '30vh' }}
// 								/>
// 							</a>
// 						</Col>
// 					</Row>
// 				</Col>
// 			</Row>
// 		</Col>
// 	);
// }
