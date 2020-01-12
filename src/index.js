import readlineSync from 'readline-sync';
import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc';
import * as brainGcd from './games/brain-gcd';
import * as brainProgression from './games/brain-progression';
import * as brainPrime from './games/brain-prime';

console.log("Welcome to the Brain Games!");

const playGame = (gameName) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const numOfQuestions = 3;
  let currentQuestion = 0;

  while (currentQuestion < numOfQuestions) {
    const gameQuestion = eval(gameName).gameQuestion();
    const questionText = gameQuestion.questionText;
    const correctAnswer = gameQuestion.questionAnswer;

    console.log(`Question: ${questionText}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!eval(gameName).isCorrectAnswer(userAnswer, correctAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n` +
        `Let's try again, ${name}!`
    }

    console.log('Correct!');
    currentQuestion += 1;
  }

  return `Congratulations, ${name}!`;
};

export default playGame;
