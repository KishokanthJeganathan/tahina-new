import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import { injectIntl } from 'gatsby-plugin-intl';

const IndexPage = ({ data, intl }) => (
	<Layout>
		{data.allContentfulPost.nodes.map((post) => {
			return (
				<div key={post.id}>
					<Link to={post.path}>{post.title}</Link>
				</div>
			);
		})}
	</Layout>
);

export const query = graphql`
	query ContentFulPosts($locale: String) {
		allContentfulPost(filter: { node_locale: { eq: $locale } }) {
			nodes {
				contentful_id
				title
				path
			}
		}
	}
`;

export default injectIntl(IndexPage);
