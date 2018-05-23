# Percentile-Frequency-Calculator

This package calculates percentiles given a frequency distribution. Other npm percentile packages assume you have raw unaggregated data points.

## Usage
Takes in data, an array of objects with "item" as the name of the key of the primary data and "freq" as the name of the key of the frequency data.

```
const percentile_freq_calculator = require('percentile-freq-calculator');

const data = [{myItem:1, freq: 1},{myItem:2, freq: 3},{myItem:3, freq: 6}]

percentile_freq_calculator(data, 50, "qps", "freq") // returns the median
=> 3

percentile_freq_calculator(data, 10, "qps", "freq") // returns the 10th percentile
=> 1


```
