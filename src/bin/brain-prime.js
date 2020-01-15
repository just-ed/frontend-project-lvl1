#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion, isCorrectAnswer } from '../games/brain-prime';

playGame(gameRules, gameQuestion, isCorrectAnswer);
