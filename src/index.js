import phtml from 'phtml';

export default new phtml.Plugin('phtml-schema', opts => {
	const schema = Object(opts).schema || 'https://schema.org/';

	return {
		Element(node) {
			const itemtype = node.attrs.get('itemtype');

			if (itemtype) {
				if (!node.attrs.itemscope) {
					node.attrs.add('itemscope', null);
				}

				const prefix = typeof schema === 'string' ? schema : String(schema[itemtype] || schema['*'] || '');
				const itemtypeURL = itemtype.replace(/^\w+$/, `${prefix}$&`);

				node.attrs.add('itemtype', itemtypeURL);
			}
		}
	};
});
