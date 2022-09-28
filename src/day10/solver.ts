export function solveDifferences(unparsedInput: string): number {
  const input = parseInput(unparsedInput)
    .sort((a, b) => a - b);

  // add the target device and output source to the list
  input.unshift(0);
  input.push(input[input.length - 1] + 3);

  const differences: Map<number, number> = new Map<number, number>();
  const getter = (index: number): number => differences.has(index) ? differences.get(index) as number : 0;

  // we start at one and compare with previous element.
  // assumption is that the input is always at least two elements long
  for (let i = 1; i < input.length; ++i) {
    const difference = input[i] - input[i - 1];
    differences.set(difference, getter(difference) + 1);
  }

  return getter(1) * getter(3);
}

function parseInput(input: string): number[] {
  return input
    .trim()
    .split('\n')
    .map(n => parseInt(n.trim(), 10))
    .filter(n => !isNaN(n))
}
