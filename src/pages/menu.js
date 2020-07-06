import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Menu() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		axios.post(`https://tahina-test.herokuapp.com/doggos`, { data }).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" name="firstName" ref={register} />

			<input type="text" name="secondName" ref={register} />

			<input type="submit" />
		</form>
	);
}
