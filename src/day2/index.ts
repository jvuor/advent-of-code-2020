import { getInput } from '../shared/utils';
import { PasswordValidator } from './Password-Validator';

const input = getInput();
const validator = new PasswordValidator();
validator.validateInputFile(input);
