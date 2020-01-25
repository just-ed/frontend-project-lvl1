import readlineSync from 'readline-sync';

const numOfQuestions = 3;

const isCorrectAnswer = (userAsnwer, correctAnswer) => userAsnwer === correctAnswer;

const playGame = (gameTask, createQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTask}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < numOfQuestions; i += 1) {
    const { question, answer } = createQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!isCorrectAnswer(userAnswer, answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
