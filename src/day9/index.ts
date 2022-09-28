import { getInput } from '../shared/utils';
import { Solver } from './solver';

const input = getInput();
const solver = new Solver(input, 25);
const part1Result = solver.solveForFirstBadInput();
console.log('Part 1 result', part1Result);
const part2Result = solver.findRangeForTotal(part1Result!);
console.log('Part 2 result', solver.getWeakness(part2Result));
