import { getInput } from '../shared/utils';
import { Map } from './Map';

const input = getInput();
const map = new Map(input);
const count = map.countTrees(1, 3);
console.log(`Part 1: ${count} trees.`);
const slopeCount = map.countSlopes();
console.log(`Part 2: ${slopeCount}`);