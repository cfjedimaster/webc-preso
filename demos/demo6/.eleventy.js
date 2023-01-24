const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(EleventyRenderPlugin);
	
	eleventyConfig.addPlugin(pluginWebc, {
		/* options go here, if needed */
	});
};
