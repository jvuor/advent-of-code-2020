export class PasswordValidator2 {
  public validateInputFile(input: string) {
    const correctPasswordAmount = input
      .trim()
      .split('\n')
      .filter(line => PasswordValidator2.validate(line))
      .length;

    console.log(`Found ${correctPasswordAmount} correct passwords`);
  }

  public static validate(inputLine: string): boolean {
    const results = inputLine.match(/^(\d+)-(\d+)\s(\w):\s(\w*)\s?$/);
    if (!results) {
      throw new Error(`Invalid input ${inputLine}`);
    }

    const [ _, pos1, pos2, char, password ] = results;

    // exactly one match is required so != serves as a pseudo xor operator here
    return (password[+pos1 - 1] === char) !== (password[+pos2 - 1] === char);
  }
}
