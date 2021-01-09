import { ExecutionResult } from './interface/execution-result.interface';
import { Instruction } from './interface/instruction.interface';
import { Operation } from './interface/operation.enum';

export class InstructionParser {
  public instructions: Instruction[];

  public constructor(input: string) {
    this.instructions = this.parseInput(input);
  }

  public findDeadlock(): void {
    const result = this.execute(this.instructions);
    if (!result.finished) {
      console.log('Deadlocked with accumulator', result.accumulator);
    }
  }

  public fixDeadlock(): void {
    let result = this.execute(this.instructions);
    const originalStack = [...result.stack];

    while (!result.finished) {
      let foundNotAcc = false;
      let instructionAddress: number | undefined;
      while (!foundNotAcc) {
        instructionAddress = originalStack.pop();
        if (instructionAddress === undefined) {
          throw new Error('Ran out of stack');
        }

        if (this.instructions[instructionAddress].operation !== Operation.Accumulator) {
          foundNotAcc = true;
        }
      }

      if (instructionAddress === undefined) {
        throw new Error('Ran out of stack');
      }

      const newInstructions: Instruction[] = JSON.parse(JSON.stringify(this.instructions));
      newInstructions[instructionAddress].operation = newInstructions[instructionAddress].operation === Operation.Jump ? Operation.NoOp : Operation.Jump;

      result = this.execute(newInstructions);
    }

    console.log('Finished with accumulator', result.accumulator);
  }

  private execute(instructions: Instruction[]): ExecutionResult {
    let instructionPointer = 0;
    let accumulator = 0;
    const stack: number[] = [];

    while (!stack.includes(instructionPointer)) {
      stack.push(instructionPointer);

      if(instructionPointer === instructions.length) {
        return {
          accumulator,
          stack,
          finished: true,
        };
      }

      const instruction = instructions[instructionPointer];
      if (instruction === undefined) {
        throw new Error('Out of bounds');
      }

      switch (instruction.operation) {
        case Operation.Accumulator:
          accumulator += instruction.argument;
          instructionPointer += 1;
          break;
        case Operation.Jump:
          instructionPointer += instruction.argument;
          break;
        case Operation.NoOp:
          instructionPointer += 1;
          break;
        default:
          throw new Error(`Invalid instruction ${instruction}`);
      }
    }

    return {
      accumulator,
      stack,
      finished: false,
    };
  }

  private parseInput(input: string): Instruction[] {
    return input
      .split('\n')
      .filter(r => !!r)
      .map(row => {
        const operation = row.substring(0, 3);
        const argument = parseInt(row.substring(3), 10);

        return { operation: operation as Operation, argument };
      });
  }
}
