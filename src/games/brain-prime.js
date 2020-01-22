import rand from '../lib/rand';
import playGame from '..';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

export const createQuestion = () => {
  const num = rand(100);

  const questionText = num;
  const questionAnswer = isPrime(num) ? 'yes' : 'no';

  return { questionText, questionAnswer };
};

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const playBrainPrime = () => playGame(gameRules, createQuestion);
