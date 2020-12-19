import { exec } from 'child_process';
import { PassportKeyMandatory, PassportKeys } from './passport.model';

export function processData(input: string): string[] {
  return input.split('\n\n');
}

export function passportValidator(testString: string): boolean {
  const testKeys = testString
    .match(/\w*:\w*/g)
    ?.map(s => {
      const key = /\w*/.exec(s)
      return key && key[0] ? key[0] : '';
    });

  if (!testKeys) {
    return false;
  }

  const expectedKeys = new Set<string>();
  PassportKeyMandatory.forEach((value, key) => {
    if (value) {
      expectedKeys.add(key);
    }
  })

  testKeys.forEach(key => {
    if (!Object.values(PassportKeys).includes(key as PassportKeys)) {
      return false;
    }

    if (expectedKeys.has(key)) {
      expectedKeys.delete(key);
    } else {
      return false;
    }
  });

  if (expectedKeys.size > 0) {
    return false;
  }

  return true;
}