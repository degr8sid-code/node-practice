//process.stdout.write("Hello World \n\n\n");
const readLine = require("readline");
const rl = readLine. createInterface({
    input: process.stdin,
    output: process.stdout
});
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is you preferred programming language"
];

module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;
    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);

}