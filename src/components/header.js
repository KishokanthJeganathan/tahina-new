import React from 'react';

import PropTypes from 'prop-types';
import Language from './language';

import { injectIntl, Link } from 'gatsby-plugin-intl';

const Header = () => (
	<header
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`
		}}
	>
		<Language />
	</header>
);

export default injectIntl(Header);
