import rand from '../lib/rand';
import playGame from '..';

const evalGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

export const createQuestion = () => {
  const num1 = rand(100);
  const num2 = rand(100);

  const questionText = `${num1} ${num2}`;
  const questionAnswer = evalGcd(num1, num2);

  return { questionText, questionAnswer };
};

export const gameRules = 'Find the greatest common divisor of given numbers.';

export const playBrainGcd = () => playGame(gameRules, createQuestion);
