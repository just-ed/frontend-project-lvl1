import rand from '../lib/rand';
import playGame from '..';

const isEven = (num) => num % 2 === 0;

const createQuestionAndAnswer = () => {
  const question = rand(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(gameTask, createQuestionAndAnswer);
