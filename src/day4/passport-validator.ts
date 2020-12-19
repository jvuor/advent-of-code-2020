import { exec } from 'child_process';
import { passportDataValidator } from './data-validator';
import { PassportKeyMandatory, PassportKeys } from './passport.model';

export function processData(input: string): string[] {
  return input.split('\n\n');
}

export function passportValidator(testString: string, strictMode = false): boolean {
  const testSet = testString
    .match(/\w*:(\w|#)*/g)
    ?.map(s => {
      const [key, value] = s.split(':');
      return [key, value];
    });

  if (!testSet) {
    return false;
  }

  const expectedKeys = new Set<string>();
  PassportKeyMandatory.forEach((value, key) => {
    if (value) {
      expectedKeys.add(key);
    }
  })

  for (const [key, value] of testSet) {
    if (!Object.values(PassportKeys).includes(key as PassportKeys)) {
      return false;
    }

    if (expectedKeys.has(key)) {
      expectedKeys.delete(key);
    } else if (PassportKeyMandatory.get(key as PassportKeys)) {
      return false;
    }

    if (strictMode) {
      const dataValid = passportDataValidator(key as PassportKeys, value);
      if (!dataValid) {
        return false;
      }
    }
  };

  if (expectedKeys.size > 0) {
    return false;
  }

  return true;
}