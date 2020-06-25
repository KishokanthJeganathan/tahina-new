import React, { useState } from 'react';
import styles from '../imageSlider/imageSlider.module.css';
import Img from 'gatsby-image';
import { Col, Row, Carousel } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import heroImageStyles from '../../index-page/HeroImage/heroImage.module.css';

export default function ImageSlider({ images }) {
	const [ products, setProducts ] = useState(images);
	const [ productIndex, setProductIndex ] = useState(0);

	let firstFourProducts = products.slice(productIndex, productIndex + 1);

	const nextProduct = () => {
		const lastProductIndex = products.length - 1;
		const resetProductIndex = productIndex === lastProductIndex;
		const index = resetProductIndex ? 0 : productIndex + 1;
		setProductIndex(index);
	};
	const prevProduct = () => {
		const lastProductIndex = products.length - 1;
		const resetProductIndex = productIndex === 0;
		const index = resetProductIndex ? lastProductIndex : productIndex - 1;
		setProductIndex(index);
	};

	return (
		<Col className={styles.slider} xs={12}>
			<BackgroundImage fluid={firstFourProducts[0].fluid} className={styles.image} style={{ height: '102vh' }}>
				<Col className={styles.buttonGroup} xs={12}>
					<button type="button" className={styles.btn} onClick={prevProduct}>
						<BsArrowLeft className={styles.arrow} />
					</button>
					<Row>
						<Col xs={12}>
							<h1>
								TAHINA <br />PRIVATE
							</h1>
						</Col>
						<Col xs={12}>
							<p className={heroImageStyles.link}>FOR CELEBRATING YOUR EXCLUSIVE MOMENTS</p>
						</Col>
					</Row>
					<button type="button" className={styles.btn} onClick={nextProduct}>
						<BsArrowRight className={styles.arrow} />
					</button>
				</Col>
			</BackgroundImage>
		</Col>
	);
}
