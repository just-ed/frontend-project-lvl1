#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion, isCorrectAnswer } from '../games/brain-calc';

playGame(gameRules, gameQuestion, isCorrectAnswer);
