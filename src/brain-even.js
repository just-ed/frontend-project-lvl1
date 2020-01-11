export const isEven = (num) => num % 2 === 0;
export const correctAnswer = (num) => isEven(num) ? 'yes' : 'no';
export const isCorrectAnswer = (ans, num) => ans === correctAnswer(num);