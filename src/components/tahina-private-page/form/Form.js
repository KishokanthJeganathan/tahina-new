import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../form/form.module.css';

import textHolderStyles from '../../index-page/textHolder/textHolder.module.css';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<section>
				<Col>
					<Row className={styles.formHolder}>
						<Col xs={12} className={styles.cta}>
							<h2>{this.props.title}</h2>
							<p className={textHolderStyles.content}>{this.props.CTA}</p>
						</Col>

						<Col xs={12}>
							<form onSubmit={this.submitForm} action="https://formspree.io/xeqrlgqj" method="POST">
								<Row className={styles.inputHolder}>
									<Col xs={12} sm={6} className={styles.name}>
										<label htmlFor={this.props.namePlaceholder} />
										<input
											type="text"
											name={this.props.namePlaceholder}
											placeholder={this.props.namePlaceholder}
											className={styles.input}
										/>
									</Col>
									<Col xs={12} sm={6} className={styles.telephone}>
										<label htmlFor={this.props.telephonePlaceholder} />
										<input
											type="tel"
											name={this.props.telephonePlaceholder}
											placeholder={this.props.telephonePlaceholder}
											className={styles.input}
										/>
									</Col>
									<Col xs={12} sm={6} className={styles.eventDate}>
										<label htmlFor={this.props.datePlaceholder} />
										<input
											type="text"
											name={this.props.datePlaceholder}
											placeholder={this.props.datePlaceholder}
											className={styles.input}
										/>
									</Col>
									<Col xs={12} sm={6} className={styles.guests}>
										<label htmlFor={this.props.guestNumPlaceholder} />
										<input
											type="number"
											name={this.props.guestNumPlaceholder}
											placeholder={this.props.guestNumPlaceholder}
											className={styles.input}
										/>
									</Col>

									<Col xs={12} className={styles.consent}>
										<input
											name={this.props.consentText}
											type="checkbox"
											value="1"
											className={styles.consentButton}
										/>
										{this.props.consentText}
									</Col>

									<Col xs={12} className={styles.submit}>
										{status === 'SUCCESS' ? (
											<p>{this.props.successMessege}</p>
										) : (
											<button className={styles.submitButton}>{this.props.submitText}</button>
										)}
										{status === 'ERROR' && <p>{this.props.failureMessege}</p>}
									</Col>
								</Row>
							</form>
						</Col>
					</Row>
				</Col>
			</section>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
