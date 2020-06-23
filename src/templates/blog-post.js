import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPost = ({ data }) => (
	<Layout>
		{console.log(data)}
		{/* <h1>{data.contentfulPost.title}</h1> */}
	</Layout>
);

export const query = graphql`
	query contentFulAddBlogPost($slug: String, $locale: String) {
		contentfulAddBlogPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
			path
			node_locale
		}
	}
`;

export default BlogPost;
