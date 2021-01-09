import { parse } from '@babel/core';
import { getInput } from '../shared/utils';
import { InstructionParser } from './Instruction-Parser';

const input = getInput();
const parser = new InstructionParser(input);
parser.findDeadlock();
parser.fixDeadlock();
