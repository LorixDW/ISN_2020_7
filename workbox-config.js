module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};