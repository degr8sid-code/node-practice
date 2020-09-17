//process.stdout.write("Hello World \n\n\n");
//Don't need this anymore becuase we have invoked the module
// const readLine = require("readline");
// const rl = readLine. createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const collectAnswers = require("./lib/collectAnswers");
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is you preferred programming language"
];
//we have used process.stdout

// const ask = (i=0) => {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(`>`);
// };


//function that asks the question
// ask();
//answer array
// const answers = [];
// //data events listen to keyboard
// process.stdin.on('data', data => {
//     //instead of single sentence, we'll store the answer in an array
//     //process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     answers.push(data.toString().trim());
//     if (answers.length < questions.length) 
//         ask(answers.length);
//     else
//         //to end the program
//         process.exit();
// });

// process.on ('exit', () => {
//     const [name, activity, language] = answers;
//     console.log(`
//     Thank you for your answers.
//     Go ${activity} ${name} you can write ${language} later`);
// });

//now we are using readLine
//Dont need this either because a separate module has been created
// const collectAnswers = (questions, done) => {
//     const answers = [];
//     const [firstQuestion] = questions;
//     const questionAnswered = answer => {
//         answers.push(answer);
//         if (answers.length < questions.length) {
//             rl.question(questions[answers.length], questionAnswered);
//         }
//         else {
//             done(answers);
//         }
//     }
//     rl.question(firstQuestion, questionAnswered);

// }

collectAnswers(questions, answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});