import { getInput } from '../shared/utils';
import { PasswordValidator } from './Password-Validator';
import { PasswordValidator2 } from './Password-Validator-2';

const input = getInput();

const validator = new PasswordValidator();
validator.validateInputFile(input);

const validator2 = new PasswordValidator2();
validator2.validateInputFile(input);
