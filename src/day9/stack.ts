export class Stack {
  private numbers: number[];
  private preambleLength: number;

  private get isPreamble(): boolean {
    return this.numbers.length < this.preambleLength;
  }

  public constructor(preambleLength: number) {
    this.preambleLength = preambleLength;
    this.numbers = [];
  }

  public addNumber(newNumber: number): boolean {
    if (this.isPreamble) {
      this.numbers.push(newNumber);
      return true;
    }

    if (this.canAddNumber(newNumber)) {
      this.numbers.shift();
      this.numbers.push(newNumber);

      return true;
    }

    return false;
  }

  private canAddNumber(newNumber: number): boolean {
    for (let i = 0; i < this.numbers.length; ++i) {
      for (let j = 0; j < this.numbers.length; ++j) {
        if (i !== j && (this.numbers[i] + this.numbers[j] === newNumber)) {
          return true;
        }
      }
    }

    return false;
  }
}
