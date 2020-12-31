import { getInput } from '../shared/utils';
import { BoardingPassParser } from './Boarding-Pass-Parser';

const inputPasses = getInput()
  .trim()
  .split('\n')
  .map(s => s.trim())
  .filter(s => !!s);

const passIds = inputPasses
  .map(pass => BoardingPassParser.parse(pass).id);

const highestId = passIds
  .reduce((max, cur) => cur > max ? cur : max, -Infinity);

console.log(`Highest ID is ${highestId}`);

passIds.sort((a, b) => a - b);
let previousId: number | null = null;

for (const passId of passIds) {
  if (previousId === null || (previousId + 1 === passId)) {
    previousId = passId;
  } else {
    break;
  }
}

console.log(`Missing ID is ${previousId ? previousId + 1 : 'NULL'}`);