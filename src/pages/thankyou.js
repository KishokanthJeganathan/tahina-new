import React from 'react';
import SEO from '../components/global/seo';
import { injectIntl } from 'gatsby-plugin-intl';
import { Col } from 'react-bootstrap';
import Layout from '../components/global/layout/Layout';
import { FormattedMessage } from 'gatsby-plugin-intl';

const Thankyou = () => (
	<Layout>
		<SEO
			title="Dzienkuje"
			description="Dziękujemy za subskrypcję!"
			image="https://i.ibb.co/T4nfB1c/Landing-page-image.jpg"
		/>
		<Col
			style={{
				height: '60vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center'
			}}
		>
			<h1>
				<FormattedMessage id="newsletter" /> <span>😊🎉</span>
			</h1>
		</Col>
	</Layout>
);

export default injectIntl(Thankyou);
