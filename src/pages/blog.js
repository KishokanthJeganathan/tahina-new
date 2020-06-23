import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Layout from '../components/global/layout/Layout';
import { Col, Row } from 'react-bootstrap';
import BlogSnippet from '../components/blog-page/blogSnippet/BlogSnippet';
import styles from '../components/page-css/blog.module.css';

const Blog = ({ data }) => {
	console.log(data.allContentfulAddBlogPost.edges);
	return (
		<Layout textColor="white">
			<Col xs={12}>
				<Row className={styles.blogContentHolder}>
					<Col xs={12} className={styles.title}>
						<h1>OUR BLOG</h1>
					</Col>
					{data.allContentfulAddBlogPost.edges.map((post) => (
						<BlogSnippet
							xs="12"
							sm="6"
							lg="4"
							src={post.node.blogPostCoverPicture.fluid}
							alt={post.node.blogPostCoverPicture.title}
							title={post.node.titleOfPost}
							slug={post.node.path}
						/>
					))}
				</Row>
			</Col>
		</Layout>
	);
};

export const query = graphql`
	query allContentFulAddBlogPost($locale: String) {
		allContentfulAddBlogPost(
			filter: { node_locale: { eq: $locale } }
			sort: { fields: publishedDate, order: DESC }
		) {
			edges {
				node {
					titleOfPost
					blogPostCoverPicture {
						fluid {
							...GatsbyContentfulFluid
						}
						title
					}
					path
				}
			}
		}
	}
`;

export default injectIntl(Blog);
