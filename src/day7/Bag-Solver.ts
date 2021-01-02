import { BagContainer, Bags, MyBag } from './interfaces/bag.interface';

export class BagSolver {
  public static SolvePart1(bags: Bags): number {
    let continueChecking = true;
    let checkForBags: string[] = [ MyBag ];
    let bagsRemaining = bags.filter(bag => bag.type !== MyBag);
    const bagsFound: Bags = [];

    while (continueChecking) {
      const bagTypesForNextCheck: string[] = [];
      const bagsForNextCheck: Bags = [];

      bagsRemaining.forEach(bag => {
        if (BagSolver.CheckIntersect(bag.contains.map(c => c.type), checkForBags)) {
          bagsFound.push(bag);
          bagTypesForNextCheck.push(bag.type);
        } else {
          bagsForNextCheck.push(bag);
        }
      });

      if (bagTypesForNextCheck.length > 0) {
        checkForBags = bagTypesForNextCheck;
        bagsRemaining = bagsForNextCheck;
      } else {
        continueChecking = false;
      }
    }

    return bagsFound.length;
  }

  public static SolvePart2(bags: Bags): number {
    let totalBags = -1; // Because we start with our own bag but it's not counted in the total
    const bagStack: BagContainer[] = [{
      type: MyBag,
      quantity: 1,
    }];

    while (bagStack.length > 0) {
      const bag = bagStack.pop()!;
      totalBags += bag!.quantity;

      const bagType = bags.find(b => b.type === bag.type);
      bagType!.contains.forEach(containedBag => {
        bagStack.push({
          type: containedBag.type,
          quantity: containedBag.quantity * bag!.quantity,
        });
      });
    }

    return totalBags;
  }

  public static CheckIntersect(array1: string[], array2: string[]): boolean {
    for (const item of array1) {
      if (array2.includes(item)) {
        return true;
      }
    }

    return false;
  }
}
