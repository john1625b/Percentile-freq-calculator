# Percentile-Freq-Calculator

This package calculates percentiles given a frequency distribution. Other npm percentile packages assume you have raw unaggregated data points.

[npm link](https://www.npmjs.com/package/percentile-freq-calculator)

## Usage
Takes in data, an array of objects with "item" as the name of the key of the primary data and "freq" as the name of the key of the frequency data.

```
const percentile_freq_calculator = require('percentile-freq-calculator');


const data = [{myValue:1, freq: 1},{myValue:2, freq: 3},{myValue:3, freq: 6}]

percentile_freq_calculator(data, 0.5, "myValue", "freq") // returns the median
=> 3

percentile_freq_calculator(data, 0.1, "myValue", "freq") // returns the 10th percentile
=> 1


```
