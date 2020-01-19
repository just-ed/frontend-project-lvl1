import rand from '../lib/rand';

const isEven = (num) => num % 2 === 0;

export const gameQuestion = () => {
  const questionText = rand(100);
  const questionAnswer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, questionAnswer };
};

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
