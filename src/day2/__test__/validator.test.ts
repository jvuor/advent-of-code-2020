import { PasswordValidator } from '../Password-Validator';

describe('Password validator unit tests', () => {
  test('Validates correct passwords', () => {
    expect(PasswordValidator.validate('1-3 a: abcde')).toBe(true);
    expect(PasswordValidator.validate('1-3 b: cdefg')).toBe(false);
    expect(PasswordValidator.validate('2-9 c: ccccccccc')).toBe(true);
  })
});
