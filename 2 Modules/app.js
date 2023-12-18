const fetched_name = require('./names'); //fetching name from names.js
// console.log(fetched_name);

const greetings = require('./functions_here');

greetings(fetched_name.poly);
greetings(fetched_name.Rose);