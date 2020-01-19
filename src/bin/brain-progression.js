#!/usr/bin/env node

import playGame from '..';
import { gameRules, createQuestion } from '../games/brain-progression';

playGame(gameRules, createQuestion);
