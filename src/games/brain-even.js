const isEven = (num) => num % 2 === 0;

export const gameQuestion = () => {
  const questionText = Math.floor(Math.random() * 100);
  const questionAnswer = isEven(questionText) ? 'yes' : 'no';

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
