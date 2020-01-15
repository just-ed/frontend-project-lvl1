#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion, isCorrectAnswer } from '../games/brain-progression';

playGame(gameRules, gameQuestion, isCorrectAnswer);
