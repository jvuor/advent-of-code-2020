import { Operation } from './operation.enum';

export interface Instruction {
  operation: Operation;
  argument: number;
}
