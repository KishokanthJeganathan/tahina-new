import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './orderItem.module.css';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export default function OrderItem({ productFamily, addToCart }) {
	const sendToCart = (selectedItem) => {
		addToCart(selectedItem);
	};

	return (
		<Col md="12" className={styles.menuItemHolder}>
			<Row>
				{productFamily.map((product) => (
					<Col xs={12} md={6} key={uuidv4()}>
						<h3 className={styles.family}>{product.item[0].Product2.Family}</h3>
						{product.item.map((lineProduct) => (
							<Row className={styles.menuItem} key={uuidv4()}>
								<Col xs={6} className={styles.name}>
									{lineProduct.Product2.Name}
								</Col>
								<Col xs={3}>{lineProduct.UnitPrice} zł</Col>
								<Col xs={3}>
									<button
										onClick={() =>
											sendToCart({
												name: lineProduct.Product2.Name,
												price: lineProduct.UnitPrice,
												quantity: 1
											})}
									>
										Add
									</button>
								</Col>
							</Row>
						))}
					</Col>
				))}
			</Row>
		</Col>
	);
}
