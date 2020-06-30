import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
	useEffect(async () => {
		const result = await axios({
			method: 'get',
			url: 'https://tahina-test2-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Order/8012X000004qzjPQAQ',
			data: {
				fields: 'Status'
			},
			queries: {
				Authorization:
					'Bearer 00D2X000001esWS!ASAAQFt1nPdywlTPnqeFBF7WSQdKKX9nKdr_oyTpajKccG5EZ03jtJJu7BS2tv2oLWhuwrc2V9WOv3tuOFHyJ0cuq8PA4rn1'
			},
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json'
		});

		console.log(result.data);
	}, []);

	// {
	//     "url": "https://tahina-test2-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Order/8012X000004qzjPQAQ",
	//     "method": "get",
	//     "headers": {
	//         "Authorization": "Bearer 00D2X000001esWS!ASAAQFt1nPdywlTPnqeFBF7WSQdKKX9nKdr_oyTpajKccG5EZ03jtJJu7BS2tv2oLWhuwrc2V9WOv3tuOFHyJ0cuq8PA4rn1",
	//         "X-PrettyPrint": "1"
	//     },
	//     "queries": {
	//         "fields": "Status"
	//     }
	// }

	return (
		<ul>
			{/* {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
		</ul>
	);
}

export default Menu;
