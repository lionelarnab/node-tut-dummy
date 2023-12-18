const {readFile, writeFile} = require('fs'); 

console.log("Start"); //-> 1
readFile('./3 Content/first.txt','utf8',(err,resolve)=>{
    if(err){
        console.log(err);
        return;
    }
    // if(resolve)
    // {
        // console.log(resolve);
        const first = resolve;
        console.log(first);
    // }
readFile('./3 Content/second.txt','utf8',(err,resolve)=>{
    if(err){
        console.log(err);
        return;
    }
    // if(resolve)
    // {
        // console.log(resolve);
        const second = resolve;
        console.log(second);
    // }
    writeFile('./3 Content/WrittenByAsynfs.txt',
    `The content of two files are: ${first} and ${second}`,(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log('Done with this task'); // -> 3
    });
})
});
console.log("Starting with next task"); // -> 2
