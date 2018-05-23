const _ = require('lodash');

function percentile_freq_calculator(data, percentile, itemName, freqName) {
	let flattened = [];
	for (let i = 0; i < data.length; i++) {
		if(!_.isInteger(data[i][freqName])){
			throw new Error('freq member must be an integer');
		};
		for (let j = 0; j < data[i][freqName]; j++) {
			flattened.push(data[i][itemName]);
		}
	}

	flattened = _.sortBy(flattened)

	const index = Math.ceil((flattened.length * (percentile / 100) ));
	return flattened[index];
}

module.exports = percentile_freq_calculator;
