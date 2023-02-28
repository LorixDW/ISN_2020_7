module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,ico,html,json,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};