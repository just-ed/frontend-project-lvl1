const operators = ['+', '-', '*'];

export const gameQuestion = () => {
  const num1 = Math.floor(Math.random()*10);
  const num2 = Math.floor(Math.random()*10);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  return `${num1} ${operator} ${num2}`;
};

export const correctAnswer = (exp) => eval(exp);
export const isCorrectAnswer = (ans, exp) => Number(ans) === eval(exp);
