import { passportDataValidator } from '../data-validator';
import { PassportKeys } from '../passport.model';

describe('Data validator unit tests', () => {
  function validatorTest(validValues: string[], invalidValues: string[], key: PassportKeys): void {
    validValues.forEach(value => expect(passportDataValidator(key, value)).toBe(true));
    invalidValues.forEach(value => expect(passportDataValidator(key, value)).toBe(false));
  }

  test('Birth year', () => {
    const valid = ['1920', '1950', '2002'];
    const invalid = ['1919', '2003', 'x', '-2', '46546456'];
    validatorTest(valid, invalid, PassportKeys.BirthYear);
  });
});