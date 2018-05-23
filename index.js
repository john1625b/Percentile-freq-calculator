const _ = require('lodash');


const percentile-freq-calculator = (data, percentile, itemName, freqName) => {
	let flattened = [];
	for (let i = 0; i < arr.length; i++) {
		if(!_.isInteger(arr[i][freqName])){
			throw new Error('freq member must be an integer');
		};
		for (let j = 0; j < arr[i][freqName]; j++) {
			flattened.push(arr[i][itemName]);
		}
	}

	flattened = _.sortBy(flattened)

	const index = Math.ceil((flattened.length * (percentile / 100) ));
	return flattened[index];
}

module.exports = percentile-freq-calculator;
