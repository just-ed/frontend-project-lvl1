import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const isCorrectAnswer = (userAsnwer, correctAnswer) => userAsnwer === correctAnswer.toString();

const playGame = (gameRules, gameQuestion) => {
  console.log(gameRules);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const numOfQuestions = 3;
  let currentQuestion = 0;

  while (currentQuestion < numOfQuestions) {
    const { questionText, questionAnswer } = gameQuestion();

    console.log(`Question: ${questionText}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!isCorrectAnswer(userAnswer, questionAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(.`,
        `Correct answer was '${questionAnswer}'.\n`,
        `Let's try again, ${name}!`,
      );
      return;
    }

    console.log('Correct!');
    currentQuestion += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
