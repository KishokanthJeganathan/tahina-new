import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../newsLetter/newsLetter.module.css';
import textHolderStyles from '../../index-page/textHolder/textHolder.module.css';

export default function NewsLetter({
	border,
	newsletterTitle,
	newsletterCTA,
	consentText,
	firstName,
	lastName,
	emailAddress,
	mobile,
	btnText
}) {
	return (
		<section className={styles.newsletterHolder} style={{ border: border }}>
			<Col>
				<Row className={styles.newsletter}>
					<Col xs={12} md={8} className={styles.cta}>
						<h2>{newsletterTitle}</h2>
						<p className={textHolderStyles.content}>{newsletterCTA}</p>
					</Col>
					<Col xs={12}>
						<form
							action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
							method="POST"
						>
							<Row className={styles.holder}>
								<Col xs={12}>
									<input type="hidden" name="oid" value="00D5I000002tRcD" />
									<input type="hidden" name="retURL" value="https://tahina.pl/thankyou" />
								</Col>
								<Col xs={12} sm={6} className={styles.firstName}>
									<label htmlFor="first_name" />
									<input
										id="first_name"
										maxLength="40"
										name="first_name"
										size="20"
										type="text"
										placeholder={firstName}
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.lastName}>
									<label htmlFor="last_name" />
									<input
										id="last_name"
										maxLength="80"
										name="last_name"
										size="20"
										type="text"
										placeholder={lastName}
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.email}>
									<label htmlFor="email" />
									<input
										id="email"
										maxLength="80"
										name="email"
										size="20"
										type="text"
										placeholder={emailAddress}
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.mobile}>
									<label htmlFor="mobile" />
									<input
										id="mobile"
										maxLength="40"
										name="mobile"
										size="20"
										type="text"
										placeholder={mobile}
										className={styles.input}
									/>
								</Col>

								<Col xs={12} className={styles.consent}>
									<input
										id="00N5I000000lXCu"
										name="00N5I000000lXCu"
										type="checkbox"
										value="1"
										className={styles.consentButton}
									/>
									{consentText}
								</Col>
								<Col xs={12} className={styles.submit}>
									<button type="submit" name="submit" className={styles.submitButton}>
										{btnText}
									</button>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Col>
		</section>
	);
}
