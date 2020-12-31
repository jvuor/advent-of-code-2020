import { BoardingPassParser } from '../Boarding-Pass-Parser';

describe('BoardingPassParser unit tests', () => {
  test('Parsing tests', () => {
    const testParser = (pass: string, row: number, column: number, id: number) => {
      const result = BoardingPassParser.parse(pass);

      expect(result.row).toBe(row);
      expect(result.column).toBe(column);
      expect(result.id).toBe(id);
    }

    testParser('BFFFBBFRRR', 70, 7, 567);
    testParser('FFFBBBFRRR', 14, 7, 119);
    testParser('BBFFBBFRLL', 102, 4, 820);
  });
});
