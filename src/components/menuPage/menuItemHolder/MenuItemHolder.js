import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../menuItemHolder/menuItemHolder.module.css';

const MenuItemHolder = ({ name, price }) => {
	return (
		<Col md="6" className={styles.menuItemHolder}>
			<Row className={styles.menuItem}>
				<Col xs={9} className={styles.name}>
					{name}
				</Col>
				<Col xs={3}>{price} zl</Col>
			</Row>
		</Col>
	);
};

export default MenuItemHolder;
