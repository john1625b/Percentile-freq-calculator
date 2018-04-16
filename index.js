const json = require('./results-20180413-161401');

const arr = JSON.parse(json);

arr.map(row => {
  return {qps:row.qps, freq: row.freq}
})


const data = [
{item:1,freq:1},
{item:2,freq:3},
{item:3,freq:5},
{item:4,freq:3},
{item:5,freq:1}
]

console.log(data);

let flattened = [];

for (let i = 0; i < data.length; i++) {
	for (let j = 0; j < data[i].freq; j++) {
		flattened.push(data[i].item);
	}
}

console.log(flattened);


