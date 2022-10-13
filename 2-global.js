//GLOBALS - NO WINDOW !!! SO YOU CAN;T USE DOCUMENT.QUERYSELECTOR AND ETC.

//__dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
//
setInterval(function () {
  console.log("Hello World");
}, 1000);

setInterval(() => {
  console.log("I am so sorry for using an arrow function");
}, 1000);
