import { getInput } from '../shared/utils';
import { solveDifferences } from './solver';

const input = getInput();
const result = solveDifferences(input);
console.log('Day 10 part 1:', result);
