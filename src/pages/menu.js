import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
	useEffect(async () => {
		const result = await axios({
			method: 'get',
			url:
				'https://tahina-test2-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Pricebook2/01s2X000002XyrMQAS',
			data: {
				fields: 'Name'
			},
			headers: {
				Authorization:
					'Bearer 00D2X000001esWS!ASAAQFt1nPdywlTPnqeFBF7WSQdKKX9nKdr_oyTpajKccG5EZ03jtJJu7BS2tv2oLWhuwrc2V9WOv3tuOFHyJ0cuq8PA4rn1'
			}
		});

		console.log(result.data);
	}, []);

	return <ul />;
}

export default Menu;
