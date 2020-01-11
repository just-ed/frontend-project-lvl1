export const gameQuestion = () => {
  const num1 = Math.floor(Math.random()*100);
  const num2 = Math.floor(Math.random()*100);
  
  return `${num1} ${num2}`;
};

export const correctAnswer = (question) => {
  const [num1, num2] = question.split(' ').map(Number);

  if (num1 === num2) return num1;

  let a = num1;
  let b = num2

  while (a !== 0 && b !== 0) {
    (a > b) ? (a = a % b) : (b = b % a);
  }

  return a + b;
};

export const isCorrectAnswer = (userAns, question) => {
  return Number(userAns) === correctAnswer(question);
};
