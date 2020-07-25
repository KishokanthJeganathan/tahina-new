import React, { useEffect, useState } from 'react';
import Layout from '../components/global/layout/Layout';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import menuStyles from '../components/page-css/menu.module.css';
import OrderItem from '../components/order-page/order-item/OrderItem';
import { Link } from 'gatsby';
import { TiArrowLeft } from 'react-icons/ti';
import SEO from '../components/global/seo';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../components/page-css/order.module.css';
import { useTable } from 'react-table';

const Order = () => {
	const [ menuItems, setMenuItems ] = useState(false);
	const [ cartItems, setCartItems ] = useState([]);
	let itemsInLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://tahina-test.herokuapp.com/menu');
			setMenuItems(result.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, []);

	const addToCart = (selectedItem) => {
		let array = [ ...itemsInLocalStorage ];
		array.push(selectedItem);
		localStorage.setItem('cartItems', JSON.stringify(array));
		setCartItems(array);
	};

	const removeFromcart = (selectedItem) => {
		let cartWithoutSelectedItem = itemsInLocalStorage.filter((item) => item.name !== selectedItem);
		localStorage.setItem('cartItems', JSON.stringify(cartWithoutSelectedItem));
		setCartItems(cartWithoutSelectedItem);
	};

	const divideMenu = () => {
		let Brunch = [];
		let Napoje = [];
		let Opakowania = [];
		let PasteAndToppings = [];
		let PastyNaWagę = [];
		let Sets = [];
		let TahinaBowl = [];
		let TahinaDeli = [];
		let Wraps = [];

		menuItems.records.forEach((item) => {
			if (item.Product2.Family === 'Brunch') {
				Brunch.push(item);
			}
			if (item.Product2.Family === 'Napoje') {
				Napoje.push(item);
			}
			if (item.Product2.Family === 'Opakowania') {
				Opakowania.push(item);
			}
			if (item.Product2.Family === 'Paste and toppings') {
				PasteAndToppings.push(item);
			}
			if (item.Product2.Family === 'Pasty na wagę') {
				PastyNaWagę.push(item);
			}
			if (item.Product2.Family === 'Sets') {
				Sets.push(item);
			}
			if (item.Product2.Family === 'Tahina Bowl') {
				TahinaBowl.push(item);
			}
			if (item.Product2.Family === 'Tahina Deli') {
				TahinaDeli.push(item);
			} else if (item.Product2.Family === 'Wraps') {
				Wraps.push(item);
			}
		});

		let menu = [
			{ item: Brunch },
			{ item: Napoje },
			{ item: Opakowania },
			{ item: PasteAndToppings },
			{ item: PastyNaWagę },
			{ item: Sets },
			{ item: TahinaBowl },
			{ item: TahinaDeli },
			{ item: Wraps }
		];

		let cleanedMenu = menu.filter((product) => product.item.length !== 0);

		return <OrderItem productFamily={cleanedMenu} addToCart={addToCart} />;
	};

	const add = () => {
		let array = [];
		itemsInLocalStorage.forEach((item) => array.push(item.price));
		return array.reduce((accumaltor, currentValue) => {
			return accumaltor + currentValue;
		}, 0);
	};

	const table = () => {
		return (
			<table>
				<tbody>
					{itemsInLocalStorage.map((item) => (
						<tr>
							<td className={styles.name}>{item.name}</td>
							<td className={styles.price}>{item.quantity}</td>
							<td className={styles.price}>{item.price} zł</td>
							<td className={styles.price} onClick={() => removeFromcart(item.name)}>
								<button> Remove</button>
							</td>
						</tr>
					))}
					<tr>
						<td className={styles.total}>Total</td>
						<td className={styles.total} />
						<td className={styles.total} />
						<td className={styles.totalNumber}>{add()} zł</td>
					</tr>
				</tbody>
			</table>
		);
	};

	return (
		<Layout textColor="white">
			<Col>
				<Row className={menuStyles.menuHolder}>
					<Col className={menuStyles.menu} xs="12" md="8">
						<h1 className={menuStyles.title}>Tahina Menu</h1>
						<Link to="/menu" className={menuStyles.link}>
							<TiArrowLeft /> Back to Menu
						</Link>
						<Row>
							{menuItems ? (
								divideMenu()
							) : (
								<Col className="text-center">
									<Loader type="ThreeDots" color="#0eb398b9" height={80} width={80} />
								</Col>
							)}
						</Row>
					</Col>
					<Col xs={12} className={styles.cart} xs="12" md="8">
						<h2>Your Cart</h2>
						{console.log(itemsInLocalStorage)}
						{itemsInLocalStorage && table()}
					</Col>
				</Row>
			</Col>
		</Layout>
	);
};

export default Order;
