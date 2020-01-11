import readlineSync from 'readline-sync';
import * as brainEven from './brain-even';

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const numOfQuestions = 3;
  let currentQuestion = 0;

  while (currentQuestion < numOfQuestions) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (!brainEven.isCorrectAnswer(answer, num)) {
      return `'${answer}' is wrong answer ;(.` +
        `Correct answer was '${brainEven.correctAnswer(num)}'.` +
        `\nLet's try again, ${name}!`
    }

    console.log('Correct!');
    currentQuestion += 1;
  }

  return `Congratulations, ${name}!`;
};

export default playGame;
