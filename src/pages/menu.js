import React, { useEffect, useState } from 'react';
import Layout from '../components/global/layout/Layout';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import styles from '../components/page-css/menu.module.css';
import MenuItemHolder from '../components/menuPage/menuItemHolder/menuItemHolder';
import { Link } from 'gatsby';
import { TiArrowRight } from 'react-icons/ti';

const Menu = () => {
	const [ menuItems, setMenuItems ] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://tahina-test.herokuapp.com/doggos');
			setMenuItems(result.data);
		};
		fetchData();
	}, []);

	return (
		<Layout textColor="white">
			<Col>
				<Row className={styles.menuHolder}>
					<Col className={styles.menu} xs="11" md="8">
						<h1>Tahina Menu</h1>
						<Link to="orderin" className={styles.link}>
							Order In-store <TiArrowRight />
						</Link>
						<Row>
							{menuItems ? (
								menuItems.records.map((item) => (
									<MenuItemHolder name={item.Name} price={item.UnitPrice} />
								))
							) : null}
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
