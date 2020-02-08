import rand from '../lib/rand';
import playGame from '..';

const progressionSize = 10;

const makeProgression = (start, diff) => {
  const progression = [];

  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const start = rand(0, 100);
  const diff = rand(1, 10);
  const progression = makeProgression(start, diff);

  const answer = progression[rand(0, progression.length)];
  progression[progression.indexOf(answer)] = '..';

  const question = progression.join(' ');

  return { question, answer: answer.toString() };
};

const gameTask = 'What number is missing in the progression?';

export default () => playGame(gameTask, createQuestionAndAnswer);
