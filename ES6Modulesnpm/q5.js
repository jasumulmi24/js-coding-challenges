const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6];

const chunks = _.chunk(arr, 2);

console.log(chunks);
