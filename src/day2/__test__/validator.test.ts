import { PasswordValidator } from '../Password-Validator';
import { PasswordValidator2 } from '../Password-Validator-2';

describe('Password validator unit tests', () => {
  test('Validator 1 unit tests', () => {
    expect(PasswordValidator.validate('1-3 a: abcde')).toBe(true);
    expect(PasswordValidator.validate('1-3 b: cdefg')).toBe(false);
    expect(PasswordValidator.validate('2-9 c: ccccccccc')).toBe(true);
  })

  test('Validator 2 unit tests', () => {
    expect(PasswordValidator2.validate('1-3 a: abcde')).toBe(true);
    expect(PasswordValidator2.validate('1-3 b: cdefg')).toBe(false);
    expect(PasswordValidator2.validate('2-9 c: ccccccccc')).toBe(false);
  })
});
