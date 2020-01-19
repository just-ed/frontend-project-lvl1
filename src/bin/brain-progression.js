#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion } from '../games/brain-progression';

playGame(gameRules, gameQuestion);
