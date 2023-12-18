const os = require('path');
console.log(os.sep);

const filePath = os.join('/3 Content','SubFolder','test.txt');//This will fetch the path or location for particular file
console.log(`The path of the txt file is ${filePath}`); 

const base = os.basename(filePath); //The base name of the file location
console.log(base);

//To find absolute path
const absolutePath = os.resolve(__dirname,'3 Content','SubFolder','test.txt');
console.log(absolutePath);