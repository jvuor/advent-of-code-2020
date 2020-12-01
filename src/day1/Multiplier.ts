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
        if (i !== j && entries[i] + entries[j] === TARGET) {
          return [entries[i], entries[j]];
        }
      }
    }

    throw new Error('Correct combination not found');
  }

  private findThreeMultipliers(): number[] {
    const minimum1 = findMinimum(this.entries);
    const minumum2 = findMinimum(this.entries.filter(n => n !== minimum1));
    const entries = this.entries.filter(e => e + minimum1 + minumum2 < TARGET);

    for (let i = 0; i < entries.length; ++i) {
      for (let j = i + 1; j < entries.length; ++j) {
        for (let k = j + 1; k < entries.length; ++k) {
          if (i !== j && i !== k && j !== k && entries[i] + entries[j] + entries[k] === TARGET) {
            return [entries[i], entries[j], entries[k]];
          }
        }
      }
    }

    throw new Error('Correct combination not found');
  }

  public getSolution(): void {
    const [a, b] = this.findMultipliers();
    console.log(`${a} * ${b} = ${a * b }`);
  }

  public getSolution2(): void {
    const [a, b, c] = this.findThreeMultipliers();
    console.log(`${a} * ${b} * ${c} = ${a * b * c}`);
  }
}
