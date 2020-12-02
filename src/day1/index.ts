import { getInput } from '../shared/utils';
import { Multiplier } from './Multiplier';

const input = getInput();
const multiplier = new Multiplier(input);
multiplier.getSolution();
multiplier.getSolution2();
