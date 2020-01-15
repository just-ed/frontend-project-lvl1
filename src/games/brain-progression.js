const progressionSize = 10;

export const gameQuestion = () => {
  const start = Math.floor(Math.random() * 100);
  const d = Math.ceil(Math.random() * 10);

  const arr = [start];

  for (let i = arr.length; i < progressionSize; i += 1) {
    arr.push(arr[i - 1] + d);
  }

  const questionAnswer = arr[Math.floor(Math.random() * arr.length)];

  arr[arr.indexOf(questionAnswer)] = '..';
  const questionText = arr.join(' ');

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer;

export const gameRules = 'What number is missing in the progression?\n';
