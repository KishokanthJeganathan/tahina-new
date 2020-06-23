const path = require(`path`);

// pages locale
exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;
	deletePage(page);
	// You can access the variable "locale" in your page queries now
	createPage({
		...page,
		context: {
			...page.context,
			locale: page.context.intl.language
		}
	});
};

// blog posts

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const { data } = await graphql(`{
        allContentfulAddBlogPost {
          edges {
            node {
              path
            }
          }
        }
      }`);

	data.allContentfulAddBlogPost.edges.forEach(({ node }) => {
		createPage({
			path: `blog/${node.path}`,
			component: path.resolve(`src/templates/blog-post-template.js`),
			context: { slug: node.path }
		});
	});
};
