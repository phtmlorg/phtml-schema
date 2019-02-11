module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'basic:http': {
		message: 'supports { schema } usage',
		options: {
			schema: 'http://schema.org/'
		}
	},
	'basic:object': {
		message: 'supports { schema } usage',
		options: {
			schema: {
				'*': 'http://schema.org/',
				AggregateOffer: 'https://schema.org/'
			}
		}
	}
};
