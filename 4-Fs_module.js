const {readFileSync, writeFileSync} = require('fs'); 
console.log("start");
const first = readFileSync('./3 Content/first.txt','utf8');
const second = readFileSync('./3 Content/second.txt','utf8');

console.log(first,'\n',second);

//To write in a file (If the file is not present, it will be automatically created. If already present then all the content will be overidden.)
writeFileSync('./3 Content/WrittenByfs.txt',`The passage is : ${first} and ${second}`);
console.log("Done with this task");
//To append
writeFileSync('./3 Content/WrittenByfs.txt',`\n This line is appended after first line.`,{flag: 'a'});

console.log("starting next task");