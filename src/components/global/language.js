import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
	en: 'EN-',
	pl: 'PL'
};

const languageClick = (e, language) => {
	e.preventDefault();
	changeLocale(language);
};

const Language = () => (
	<div>
		<IntlContextConsumer>
			{({ languages, language: currentLocale }) =>
				languages.map((language) => (
					<a
						key={language}
						onClick={(e) => languageClick(e, language)}
						href="/"
						style={{ padding: '0.1rem', color: 'white', textShadow: '0px 0px 5px black' }}
					>
						{languageName[language]}
					</a>
				))}
		</IntlContextConsumer>
	</div>
);

export default Language;
