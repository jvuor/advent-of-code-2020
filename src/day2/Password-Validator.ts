export class PasswordValidator {
  public validateInputFile(input: string) {
    const correctPasswordAmount = input
      .trim()
      .split('\n')
      .filter(line => PasswordValidator.validate(line))
      .length;

    console.log(`Found ${correctPasswordAmount} correct passwords`);
  }

  public static validate(inputLine: string): boolean {
    const results = inputLine.match(/^(\d+)-(\d+)\s(\w):\s(\w*)\s?$/);
    if (!results) {
      throw new Error(`Invalid input ${inputLine}`);
    }

    const [ _, min, max, char, password ] = results;
    const charAmount = password.split('').filter(c => c === char).length;

    return (charAmount >= +min) && (charAmount <= +max);
  }
}
