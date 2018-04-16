const json = require('./results-20180413-161401');

const percentileCalc = (data, percentile) => {
	let arr = JSON.parse(data);
	
	arr = arr.map(row => {
//	  delete row.host
//	  delete row.date_interval
//	  delete row.hour
//	  delete row.hour
//	  delete row.p10
//	  delete row.p25
//	  delete row.median
//	  delete row.p75
//	  delete row.p95
//	  delete row.max
//
	  return row
	})

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
