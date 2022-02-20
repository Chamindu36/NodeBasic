console.log("Learning NodeJS");

// Import functions
const {sub, sum} = require("./utils");

// Use functions
const total = sum(23,98);
console.log("SUM: ", total);

const subTotal = sub(100,8);
console.log("SUB: ", subTotal)
