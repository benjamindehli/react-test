const path = require('path')
module.exports = {
	title: "DIBK designmal",
	styleguideDir: "docs",
	require: [
		path.join(__dirname, 'src/styleguide/styleguide.js')
	],
	sections: [
		{name: 'Introduction', content: './src/styleguide/introduction.md'},
	    {name: 'Components', components: './src/lib/components/**/*.js'}
	],
	template: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'src/styleguide/styleguide.css'
				}
			]
		}
	},
	theme: {
		fontFamily: {
			base: '"Open Sans", sans-serif'
		}
	}
};