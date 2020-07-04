import React, { useEffect } from 'react';
import axios from 'axios';

function Menu() {
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://tahina-test.herokuapp.com/');

			// setQuote(result.data);

			console.log(result.data);
		};

		fetchData();
	}, []);

	return <ul />;
}

export default Menu;
