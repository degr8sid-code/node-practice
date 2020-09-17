//global objects: require, process
//to import other modules, use 'require'
const path = require("path");
console.log("Hello World");
console.log(__dirname);
console.log(__filename);
console.log(`The file name is ${path.basename(__filename)}`);
console.log(process.pid);
console.log(process.version.node);
console.log(process.argv);

//array
const [,,firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

//providing flags
//node globalProcess --user ned --greeting "Hidely Hoe"

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
//to grab variables
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);