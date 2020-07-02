import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
	useEffect(async () => {
		const result = await axios({
			method: 'get',
			url: `https://tahina-test2-dev-ed.my.salesforce.com/services/data/v48.0/query?q=SELECT+Product2Id,+Product2.Name+from+Pricebookentry+WHERE+Pricebook2Id='01s2X000002X6PxQAK'`,
			headers: {
				Authorization:
					'Bearer 00D2X000001esWS!ASAAQG1hpJDqk71EfwEsDjQEOIVpxLK6B86D8g3yhU5tlUWBtcHoZhpbCtu.kinCTNz03pmHu4xgE_WN05YihmiORJ8e01tZ'
			}
		});

		console.log(result.data);
	}, []);

	return <ul />;
}

export default Menu;
