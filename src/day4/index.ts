import { getInput } from '../shared/utils';
import { passportValidator, processData } from './passport-validator';

const input = getInput();
const passports = processData(input);
const result = passports.filter(passport => passportValidator(passport)).length;
console.log(`Found ${result} valid passports`);