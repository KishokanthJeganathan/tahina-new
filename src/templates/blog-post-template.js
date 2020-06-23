import React from 'react';
import Layout from '../components/global/layout/Layout';
import Img from 'gatsby-image';
import { Col, Row } from 'react-bootstrap';
import styles from '../components/page-css/blogTemplate.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, INLINES, BLOCKS } from '@contentful/rich-text-types';
import SocialSharing from '../components/blog-page/socialSharing/SocialSharing';
import NewsLetter from '../components/global/newsLetter/NewsLetter';
import { graphql, useStaticQuery } from 'gatsby';

const website_url = 'https://tahina-staging.netlify.app/';

const Bold = ({ children }) => <p className={styles.bold}>{children}</p>;
const Text = ({ children }) => <p className={styles.p}>{children}</p>;

export const BlogPost = ({ data }) => {
	const {
		blogPostCoverPicture: { fluid, title },
		contentOfBlogPost,
		publishedDate,
		titleOfPost,
		slug,
		readingTime
	} = data.contentfulAddBlogPost;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
			'embedded-asset-block': (node) => {
				return (
					<img
						src={node.data.target.fields.file['en-US'].url}
						className="img-fluid"
						alt={node.data.target.fields.title['en-US']}
					/>
				);
			},
			[INLINES.HYPERLINK]: (node) => {
				if (node.data.uri.indexOf('youtube.com') !== -1) {
					return (
						<div className={styles.videoHolder}>
							<iframe
								title="YouTube Video"
								id="ytplayer"
								src={node.data.uri}
								type="text/html"
								width="640"
								height="360"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen"
							/>
						</div>
					);
				} else
					return (
						<a
							href={node.data.uri}
							target={`${node.data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
							rel={`${node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
						>
							{node.content[0].value}
						</a>
					);
			}
		}
	};

	const { json } = contentOfBlogPost;
	return (
		<Layout textColor="white">
			<Col xs={12} className={styles.blogPost}>
				<Row className={styles.contentHolder}>
					<Col className={styles.coverImageHolder} xs={12}>
						<Img fluid={fluid} alt={title} className={styles.coverImage} />
					</Col>
					<Col xs={12} md={8} className={styles.blogPostContent}>
						<h1 className={styles.title}>{titleOfPost}</h1>
						<Row className={styles.postInfo}>
							<Col xs={12} sm={6} className={styles.publishedDate}>
								<strong>Published: {publishedDate}</strong>
							</Col>
							<Col xs={12} sm={6} className={styles.readingTime}>
								<strong>Reading Time: {readingTime} Minutes</strong>
							</Col>
						</Row>
						{documentToReactComponents(json, options)}
					</Col>
					<Col xs={12}>
						<SocialSharing slug={slug} />
					</Col>
					<Col xs={12} md={8}>
						<NewsLetter border="1px solid black" />
					</Col>
				</Row>
			</Col>
		</Layout>
	);
};

export const query = graphql`
	query contentFulAddBlogPost($slug: String, $locale: String) {
		contentfulAddBlogPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
			path
			titleOfPost
			readingTime
			publishedDate(formatString: "MMMM Do, YYYY")
			blogPostCoverPicture {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			contentOfBlogPost {
				content {
					nodeType
				}
				json
			}
		}
	}
`;

export default BlogPost;
