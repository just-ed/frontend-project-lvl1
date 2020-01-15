#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion, isCorrectAnswer } from '../games/brain-even';

playGame(gameRules, gameQuestion, isCorrectAnswer);
