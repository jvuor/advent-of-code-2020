import { getInput } from '../shared/utils';
import { BagParser } from './Bag-Parser';
import { BagSolver } from './Bag-Solver';

const input = getInput();
const bags = new BagParser(input).bags;
const solution1 = BagSolver.SolvePart1(bags);
console.log(`Solution for part 1: ${solution1}`);

const solution2 = BagSolver.SolvePart2(bags);
console.log(`Solution for part 2: ${solution2}`);
