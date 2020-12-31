import { getInput } from '../shared/utils';
import { BoardingPassParser } from './Boarding-Pass-Parser';

const inputPasses = getInput()
  .trim()
  .split('\n')
  .map(s => s.trim())
  .filter(s => !!s);

const passIds = inputPasses
  .map(pass => BoardingPassParser.parse(pass).id);

passIds.sort((a, b) => a - b);

console.log(`Highest ID is ${passIds[passIds.length - 1]}`);

let previousId: number | null = null;

for (const passId of passIds) {
  if (previousId === null || (previousId + 1 === passId)) {
    previousId = passId;
  } else {
    break;
  }
}

console.log(`Missing ID is ${previousId ? previousId + 1 : 'NULL'}`);