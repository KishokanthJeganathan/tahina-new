import React from 'react';

import { injectIntl } from 'gatsby-plugin-intl';

const NotFoundPage = () => (
	<div>
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</div>
);

export default injectIntl(NotFoundPage);
