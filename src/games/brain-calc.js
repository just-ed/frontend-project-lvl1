const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case ('+'):
      result = num1 + num2;
      break;
    case ('-'):
      result = num1 - num2;
      break;
    case ('*'):
      result = num1 * num2;
      break;
    default:
      result = null;
  }

  return result;
};

export const gameQuestion = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const questionText = `${num1} ${operator} ${num2}`;
  const questionAnswer = calculate(num1, num2, operator);

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer;

export const gameRules = 'What is the result of the expression?\n';
