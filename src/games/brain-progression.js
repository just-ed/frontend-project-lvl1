import rand from '../lib/rand';

const progressionSize = 10;

const makeProgression = (start, diff) => {
  const progression = [];

  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};

export const createQuestion = () => {
  const start = rand(100);
  const diff = rand(10) + 1;
  const progression = makeProgression(start, diff);

  const questionAnswer = progression[rand(progression.length)];
  progression[progression.indexOf(questionAnswer)] = '..';
  const questionText = progression.join(' ');

  return { questionText, questionAnswer };
};

export const gameRules = 'What number is missing in the progression?\n';
