const isEven = (num) => num % 2 === 0;

export const gameQuestion = () => {
  const questionText = Math.floor(Math.random() * 100);
  const questionAnswer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (ans, num) => ans === num;
