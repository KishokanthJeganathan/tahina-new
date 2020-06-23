import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => (
	<div>
		{console.log(data)}
		{/* <h1>{data.contentfulPost.title}</h1> */}
	</div>
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
