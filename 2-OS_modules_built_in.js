const { log } = require('console');
const os = require('os');//This is built in module for OS

const user = os.userInfo(); //Fetching User Info
console.log(user);

//To check the system uptime 

//uptime -> Uptime is the duration of time that a system has been working and available in a reliable operating manner.
const uptime = os.uptime();
console.log("The uptime memeory is: ",uptime);

//branch of info about os
const CurrOs = {
    name: os.type(),
    releaseOS: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(CurrOs);