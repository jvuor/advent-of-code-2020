import { getInput } from '../shared/utils';

const input = getInput();
const result = input
  .trim()
  .split('\n\n')
  .map(group => group.replace(/[^A-Za-z]/g, ''))
  .reduce((total, group) => {
    const set = new Set(group.split(''))
    return total + set.size;
  }, 0);

console.log(`Sum of counts, part 1: ${result}`);

const result2 = input
  .trim()
  .split('\n\n')
  .map(group => {
    const members = group.split('\n');
    let commonCharacters: Set<string> | undefined;

    members.forEach(member => {
      const memberCharaters = new Set(member.split(''));

      if (commonCharacters === undefined) {
        commonCharacters = memberCharaters;
      } else {
        commonCharacters.forEach(char => {
          if (!memberCharaters.has(char)) {
            commonCharacters?.delete(char);
          }
        });
      }
    });

    return commonCharacters ? commonCharacters.size : 0;
  })
  .reduce((total, groupSum) => total + groupSum, 0);

  console.log(`Sum of counts, part 2: ${result2}`);