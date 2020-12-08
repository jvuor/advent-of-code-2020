import { slopes } from "./slopes";

enum Tile {
  Tree = '#',
  Empty = '.'
}

export class Map {
  private map: string[][];

  public constructor(input: string) {
    this.map = input.trim()
      .split('\n')
      .filter(s => s.length > 0)
      .map(s => s.trim().split(''));
  }

  public countTrees(yStep: number, xStep: number): number {
    let x = 0;
    let treeCount = 0;
    const width = this.getWidth();
    const addX = (n: number) => x = (x + n < width) ? x + n : x + n - width;

    for (let y = 0; y < this.map.length; y = y + yStep) {
      const tile = this.map[y][x];

      if (tile === Tile.Tree) {
        ++treeCount;
      }
      
      addX(xStep);
    }

    return treeCount;
  }

  public countSlopes(): number {
    return slopes.map(slope => {
      const [y, x] = slope;
      return this.countTrees(y, x);
    }).reduce((product, current) => product * current, 1);
  }

  private getWidth(): number {
    const width = this.map[0].length;
    if (this.map.some(a => a.length !== width)) {
      throw new Error('Map lines not constant width');
    }
    return width;
  }
}