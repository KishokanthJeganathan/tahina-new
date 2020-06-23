import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../newsLetter/newsLetter.module.css';
import textHolderStyles from '../../index-page/textHolder/textHolder.module.css';

export default function NewsLetter({ border }) {
	return (
		<section className={styles.newsletterHolder} style={{ border: border }}>
			<Col>
				<Row className={styles.newsletter}>
					<Col xs={12} md={8} className={styles.cta}>
						<h2>LET'S STAY IN TOUCH</h2>
						<p className={textHolderStyles.content}>
							WHO SAYS THERE IS NO SUCH THING AS A FREE LUNCH? WE CHOOSE A LUCKY WINNER EVERY MONTH FOR A
							100 PLN TAHINA GIFT CARD!
						</p>
					</Col>
					<Col xs={12}>
						<form
							action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
							method="POST"
						>
							<Row className={styles.holder}>
								<Col xs={12}>
									<input type="hidden" name="oid" value="00D5I000002tRcD" />
									<input type="hidden" name="retURL" value="https://tahina.pl/thank-you" />
								</Col>
								<Col xs={12} sm={6} className={styles.firstName}>
									<label htmlFor="first_name" />
									<input
										id="first_name"
										maxlength="40"
										name="first_name"
										size="20"
										type="text"
										placeholder="FIRST NAME"
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.lastName}>
									<label htmlFor="last_name" />
									<input
										id="last_name"
										maxlength="80"
										name="last_name"
										size="20"
										type="text"
										placeholder="LAST NAME"
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.email}>
									<label htmlFor="email" />
									<input
										id="email"
										maxlength="80"
										name="email"
										size="20"
										type="text"
										placeholder="EMAIL"
										className={styles.input}
									/>
								</Col>
								<Col xs={12} sm={6} className={styles.mobile}>
									<label htmlFor="mobile" />
									<input
										id="mobile"
										maxlength="40"
										name="mobile"
										size="20"
										type="text"
										placeholder="MOBILE"
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
									/>I consent to provide my information as per the privacy policy
								</Col>
								<Col xs={12} className={styles.submit}>
									<input type="submit" name="submit" className={styles.submitButton} />
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Col>
		</section>
	);
}
