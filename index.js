const json = require('./results-20180413-161401');
const fs = require('fs');
const _ = require('lodash');


const percentileCalc = (data, percentile, itemName, freqName) => {
	let arr = JSON.parse(data);

	arr = arr.map(row => {
		row[itemName] = parseInt(row[itemName])
		row[freqName] = parseInt(row[freqName])
		return row;
	});
	
	let flattened = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i][freqName]; j++) {
			flattened.push(arr[i][itemName]);
		}
	}

	//flattened = flattened.sort();
	flattened = _.sortBy(flattened)
	console.log(flattened)
	const index = Math.ceil((flattened.length * percentile));

	fs.writeFile("./output.txt", flattened, function(err) {
			if(err) {
			return console.log(err);
			}

			console.log("file saved with array output");
			});

	return flattened[index];
}

console.log(percentileCalc(json, 0.5, "qps", "freq"));


module.exports = percentileCalc;
