const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPassthroughCopy("./src/style.css");
	return {
		dir: {
			input: 'src',
			output: 'dist'
		}
	}
};