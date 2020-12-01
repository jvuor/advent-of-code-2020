import { findMinimum } from './find-minimum';

const TARGET = 2020;

export class Multiplier {
  private entries: number[];

  public constructor(input: string) {
    this.entries = this.parseInput(input);
  }

  private parseInput(input: string): number[] {
    return input.trim().split('\n').map(char => parseInt(char, 10)).filter(num => !isNaN(num));
  }

  private findMultipliers(): number[] {
    // premature optimization! let's reject all entries that are obviously too big
    const minimum = findMinimum(this.entries);
    const entries = this.entries.filter(e => e + minimum < TARGET)

    // brute force test every combination... O(n^2)

    for (let i = 0; i < entries.length; ++i) {
      for (let j = i + 1; j < entries.length; ++j) {
        if (entries[i] + entries[j] === TARGET) {
          return [entries[i], entries[j]];
        }
      }
    }

    throw new Error('Correct combination not found');
  }

  public getSolution(): void {
    const [a, b] = this.findMultipliers();
    console.log(`${a} * ${b} = ${a * b }`);
  }
}
