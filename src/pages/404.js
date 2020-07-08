import React from 'react';
import SEO from '../components/global/seo';
import { injectIntl } from 'gatsby-plugin-intl';

const NotFoundPage = () => (
	<div>
		<SEO title="Home page" description="hello I am the home page" image="https://i.ibb.co/KWKR1T7/1.jpg" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</div>
);

export default injectIntl(NotFoundPage);
