import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const numOfQuestions = 3;

const isCorrectAnswer = (userAsnwer, correctAnswer) => userAsnwer === correctAnswer.toString();

const playGame = (gameRules, createQuestion) => {
  console.log(gameRules);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numOfQuestions; i += 1) {
    const { questionText, questionAnswer } = createQuestion();

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
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
