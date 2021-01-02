export interface Bag {
  type: string;
  contains: BagContainer[];
}

export type Bags = Bag[];

export interface BagContainer {
  type: string;
  quantity: number;
}

export const MyBag = 'shiny gold';
export const EmptyContentDefinition = 'no other bags';
