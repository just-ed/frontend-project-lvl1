#!/usr/bin/env node

import playGame from '..';
import { gameRules, gameQuestion } from '../games/brain-prime';

playGame(gameRules, gameQuestion);
