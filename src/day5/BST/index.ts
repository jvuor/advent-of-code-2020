import { getInput } from '../../shared/utils';
import { inOrder, insertArray } from './BST';
import { rightmost, transformPassToNumber } from './utils';

const passes = getInput('src/day5/input.txt')
  .trim()
  .split('\n')
  .filter(pass => !!pass)
  .map(pass => transformPassToNumber(pass));

const tree = insertArray(passes);

console.log(`Highest value ${rightmost(tree)}`);

let previous: number | null = null;

for (const value of inOrder(tree)) {
  if (previous === null || (previous + 1 === value)) {
    previous = value;
  } else {
    break;
  }
}

console.log(`Missing ID ${previous ? previous + 1 : 'NULL'}`);