import readlineSync from 'readline-sync';
import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc'

console.log("Welcome to the Brain Games!");

const playGame = (gameName) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const numOfQuestions = 3;
  let currentQuestion = 0;

  while (currentQuestion < numOfQuestions) {
    const question = eval(gameName).gameQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (!eval(gameName).isCorrectAnswer(answer, question)) {
      return `'${answer}' is wrong answer ;(.` +
        `Correct answer was '${eval(gameName).correctAnswer(question)}'.` +
        `\nLet's try again, ${name}!`
    }

    console.log('Correct!');
    currentQuestion += 1;
  }

  return `Congratulations, ${name}!`;
};

export default playGame;
