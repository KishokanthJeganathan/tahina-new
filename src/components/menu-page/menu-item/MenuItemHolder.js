import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './menuItemHolder.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function MenuItemHolder({ productFamily }) {
	return (
		<Col md="12" className={styles.menuItemHolder}>
			<Row>
				{productFamily.map((product) => (
					<Col xs={12} md={6} key={uuidv4()}>
						<h3 className={styles.family}>{product.item[0].Product2.Family}</h3>
						{product.item.map((lineProduct) => (
							<Row className={styles.menuItem}>
								<Col xs={9} className={styles.name}>
									{lineProduct.Product2.Name}
								</Col>
								<Col xs={3}>{lineProduct.UnitPrice} zł</Col>
							</Row>
						))}
					</Col>
				))}
			</Row>
		</Col>
	);
}
