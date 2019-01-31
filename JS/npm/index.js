//simple app to loop thru an array and output it onto the console

//underscores is a convention for lodash

const _ = require("lodash");

const numbers = [22, 33, 44, 55, 66, 77];

_.each(numbers, (number, i) => {
  console.log(number);
});
