//npm version
//npm --v

//npm local dependency
//npm i <package name>

//npm global dependency
//npm install -g <package name>

//package.json -> manifest file(stores info about project/package)
//npm init (set default by pressing enter key)
//npm init -y (to set all as default)

//Now testing loadash package
const loadash = require('lodash');

const list_item = [1,[2, [3, [4]]]];
const flat_item = loadash.flattenDeep(list_item); //This will simplify into a 1d array
console.log(flat_item);