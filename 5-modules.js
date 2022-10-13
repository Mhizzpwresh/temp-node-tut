// MODULES
// CommonJS, every file is a module (by default)

const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./6-alternatives");
require("./7-mind-grenade");

console.log(data);
sayHi("Precious");
sayHi(names.john);
sayHi(names.peter);
