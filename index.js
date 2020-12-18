var readlineSync = require('readline-sync');

var score = 0;

//input
var userAnswerAge = readlineSync.question("Am i older than 25? ");

console.log("You entered " + userAnswerAge );

//processing
if (userAnswerAge == "yes") {
  //output
  console.log("You are right!");
  score = score + 1;
  console.log("Score is: " + score);
}else{
  //output
  console.log("You are wrong!");
  score = score - 1;
  console.log("Score is: " + score);
}
