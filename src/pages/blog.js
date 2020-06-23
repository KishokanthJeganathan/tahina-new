import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
	console.log(data);
	return <div>hello</div>;
};

export const query = graphql`
	query allContentFulAddBlogPost($slug: String, $locale: String) {
		contentfulAddBlogPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
			path
			node_locale
		}
	}
`;

export default injectIntl(Blog);
