import React, { useEffect, useState } from 'react';
import Layout from '../components/global/layout/Layout';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import styles from '../components/page-css/menu.module.css';
import MenuItemHolder from '../components/menu-page/menu-item/MenuItemHolder';
import { Link } from 'gatsby';
import { TiArrowRight } from 'react-icons/ti';
import SEO from '../components/global/seo';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Menu = () => {
	const [ menuItems, setMenuItems ] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://tahina-test.herokuapp.com/doggos');
			setMenuItems(result.data);
		};
		fetchData();
	}, []);

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

		return <MenuItemHolder productFamily={cleanedMenu} />;
	};

	return (
		<Layout textColor="white">
			<SEO
				title="Menu"
				description="Przyjdź do naszego menu. Godzinami eksperymentujemy ze składnikami, aby stworzyć idealnie zbilansowany posiłek."
				image="https://i.ibb.co/1z4J7XF/Studio-Project.jpg"
			/>
			<Col>
				<Row className={styles.menuHolder}>
					<Col className={styles.menu} xs="12" md="8">
						<h1 className={styles.title}>Tahina Menu</h1>
						<Link to="order" className={styles.link}>
							Order In-store <TiArrowRight />
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
				</Row>
			</Col>
		</Layout>
	);
};

export default Menu;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// export default function Menu() {
// 	const { register, handleSubmit } = useForm();

// 	const onSubmit = (data) => {
// 		axios.post(`https://tahina-test.herokuapp.com/doggos`, { data }).then((res) => {
// 			console.log(res.data);
// 		});
// 	};

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<input type="text" name="firstName" ref={register} />

// 			<input type="text" name="secondName" ref={register} />

// 			<input type="submit" />
// 		</form>
// 	);
// }
