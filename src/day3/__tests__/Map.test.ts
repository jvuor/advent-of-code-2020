import { Map } from "../Map";

describe('Map unit tests', () => {
  const input = `..##.......
  #...#...#..
  .#....#..#.
  ..#.#...#.#
  .#...##..#.
  ..#.##.....
  .#.#.#....#
  .#........#
  #.##...#...
  #...##....#
  .#..#...#.#`;

  test('treeCount test', () => {
    const map = new Map(input);
    const count = map.countTrees(1, 3);
    expect(count).toBe(7);
  });

  test('slopeCount test', () => {
    const map = new Map(input);
    expect(map.countSlopes()).toBe(336);
  });
});