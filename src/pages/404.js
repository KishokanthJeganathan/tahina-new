import React from 'react';
import SEO from '../components/global/seo';
import { injectIntl } from 'gatsby-plugin-intl';
import { Col } from 'react-bootstrap';
import Layout from '../components/global/layout/Layout';
import { FormattedMessage } from 'gatsby-plugin-intl';

const NotFoundPage = () => (
	<Layout>
		<SEO
			title="404"
			description="Przepraszamy, ale nie mamy tu nic do pokazania"
			image="https://i.ibb.co/gM7Ghhb/Studio-Project.jpg"
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
				<FormattedMessage id="error" /> <span>😔</span>
			</h1>
		</Col>
	</Layout>
);

export default injectIntl(NotFoundPage);
