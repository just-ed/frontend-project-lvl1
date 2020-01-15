export const gameQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  const questionText = `${num1} ${num2}`;

  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    (a > b) ? (a %= b) : (b %= a);
  }

  const questionAnswer = a + b;

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer;
