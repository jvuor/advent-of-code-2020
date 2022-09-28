import { Stack } from './stack';

export class Solver {
  private preambleSize: number;
  private input: number[];

  public constructor(input: string, preambleSize: number) {
    this.preambleSize = preambleSize;
    this.input = this.parseInput(input);
  }

  // returns null if all input is valid or bad input number otherwise
  public solveForFirstBadInput(): number | null {
    let validInput = true;
    let result: number | null = null;
    const testSet = [...this.input];

    const stack = new Stack(this.preambleSize);

    while(validInput && testSet.length > 0) {
      result = testSet.shift() as number;
      validInput = stack.addNumber(result!);
    }

    if (validInput) {
      // passed through all input
      return null;
    } else {
      // bad input found
      return result;
    }
  }

  public findRangeForTotal(total: number): number[] {
    const totalIndex = this.input.findIndex(n => n === total);

    for (let i = 0; i < totalIndex; ++i) {
      const rangeResult = this.testRangeFrom(i, totalIndex, total);
      if (rangeResult) {
        return this.input.slice(i, rangeResult);
      }
    }

    return [];
  }

  public getWeakness(range: number[]): number {
    const sortedInput = range.sort((a, b) => a - b);
    return sortedInput[0] + sortedInput[sortedInput.length - 1];
  }

  // return the end of the range or 0 if range not found
  private testRangeFrom(start: number, end: number, total: number): number {
    let testTotal = 0;
    let currentIndex = start;

    while(true) {
      testTotal += this.input[currentIndex++];

      if (testTotal === total) {
        return currentIndex;
      } else if (testTotal > total || currentIndex === end) {
        return 0;
      }
    }
  }

  private parseInput(input: string): number[] {
    return input
      .trim()
      .split('\n')
      .map(i => parseInt(i.trim(), 10))
      .filter(i => !isNaN(i));
  }
}
