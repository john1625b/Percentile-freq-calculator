const json = require('./results-20180413-161401');

const percentileCalc = (data, percentile) => {
	let arr = JSON.parse(data);
	
	let flattened = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].freq; j++) {
			flattened.push(arr[i].qps);
		}
	}

	console.log(flattened);
	flattened = flattened.sort();
	const index = Math.ceil((flattened.length * percentile));
	return flattened[index];
}

console.log(percentileCalc(json, 0.5));


module.exports = percentileCalc;
