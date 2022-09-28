import { Solver } from '../solver';

const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`;

describe('Day 9 unit tests', () => {
  test('Part 1 test input', () => {
    const solver = new Solver(testInput, 5);
    expect(solver.solveForFirstBadInput()).toBe(127);
  })

  test('Part 2 test input', () => {
    const solver = new Solver(testInput, 5);
    const total = solver.solveForFirstBadInput();
    const range = solver.findRangeForTotal(total!);

    const expectedResult = [15, 25, 47, 40];

    expect(range).toEqual(expectedResult);
  })
});
