import { BagParser } from '../Bag-Parser';
import { BagSolver } from '../Bag-Solver';

const testInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

describe('Part 1 unit tests', () => {
  test('Bag parsing', () => {
    const parser = new BagParser(testInput);
    expect(parser.bags.length).toBe(9);
  });

  test('Bag solver', () => {
    const bags = new BagParser(testInput).bags;
    const solution = BagSolver.SolvePart1(bags);
    expect(solution).toBe(4);
  });

  test('Intersect check', () => {
    const a = ['a', 'b', 'c'];
    const b = ['d', 'e', 'f'];
    const c = ['c', 'd'];

    expect(BagSolver.CheckIntersect(a, b)).toBe(false);
    expect(BagSolver.CheckIntersect(a, c)).toBe(true);
    expect(BagSolver.CheckIntersect(b, c)).toBe(true);
  });
});

const testInput2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

describe('Part 2 unit tests', () => {
  test('Bag solver', () => {
    const solution1 = BagSolver.SolvePart2(new BagParser(testInput).bags);
    expect(solution1).toBe(32);
    const solution2 = BagSolver.SolvePart2(new BagParser(testInput2).bags);
    expect(solution2).toBe(126);
  });
});
