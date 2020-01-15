#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion, isCorrectAnswer } from '../games/brain-gcd';

playGame(gameRules, gameQuestion, isCorrectAnswer);
