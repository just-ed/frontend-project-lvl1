import rand from '../lib/rand';

const progressionSize = 10;

const makeProgression = (start, d) => {
  const progression = [start];

  for (let i = progression.length; i < progressionSize; i += 1) {
    progression.push(progression[i - 1] + d);
  }

  return progression;
};

export const gameQuestion = () => {
  const start = rand(100);
  const d = rand(10) + 1;
  const arr = makeProgression(start, d);

  const questionAnswer = arr[rand(arr.length)];
  arr[arr.indexOf(questionAnswer)] = '..';
  const questionText = arr.join(' ');

  return { questionText, questionAnswer };
};

export const gameRules = 'What number is missing in the progression?\n';
