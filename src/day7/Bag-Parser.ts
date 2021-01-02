import { Bag, BagContainer, Bags, EmptyContentDefinition } from './interfaces/bag.interface';

export class BagParser {
  public bags: Bags;

  public constructor(input: string) {
    this.bags = this.parseInput(input);
  }

  private parseInput(input:string): Bags {
    const bagDefinitions = input
      .trim()
      .split('\n')
      .map(row => row.trim())
      .filter(row => !!row);

    return bagDefinitions.map(definition => this.parseBag(definition));
  }

  private parseBag(bagDefinition: string): Bag {
    const matches = bagDefinition.match(/^(\w+\s\w+) bags contain (.*)\.$/);
    if (!matches) {
      throw new Error(`Cannot parse ${bagDefinition}`);
    }

    const type = matches[1];
    const contentDefinition = matches[2];

    return {
      type,
      contains: this.parseContents(contentDefinition),
    };
  }

  private parseContents(contentDefinition: string): BagContainer[] {
    if (contentDefinition === EmptyContentDefinition) {
      return [];
    } else {
      const contents: BagContainer[] = contentDefinition
        .split(',')
        .map(definition => definition.trim())
        .map(definition => {
          const matches = definition.match(/^(\d+)\s(\w+\s\w+)\sbags?$/);
          if (!matches) {
            throw new Error(`Cannot parse content definition ${definition}`);
          }

          const quantity = parseInt(matches[1], 10);
          const type = matches[2];

          return {
            quantity,
            type
          }
        });

      return contents;
    }
  }
}
