const progressionSize = 10;

const makeProgression = (start, d) => {
  const progression = [start];

  for (let i = progression.length; i < progressionSize; i += 1) {
    progression.push(progression[i - 1] + d);
  }

  return progression;
};

export const gameQuestion = () => {
  const start = Math.floor(Math.random() * 100);
  const d = Math.ceil(Math.random() * 10);
  const arr = makeProgression(start, d);

  const questionAnswer = arr[Math.floor(Math.random() * arr.length)];
  arr[arr.indexOf(questionAnswer)] = '..';
  const questionText = arr.join(' ');

  return { questionText, questionAnswer };
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => Number(userAnswer) === correctAnswer;

export const gameRules = 'What number is missing in the progression?\n';
