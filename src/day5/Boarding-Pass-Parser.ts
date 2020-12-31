interface BoardingPassPartial {
  row: number;
  column: number;
}

export interface BoardingPass extends BoardingPassPartial {
  id: number;
}

export class BoardingPassParser {
  public static parse(boardingPass: string): BoardingPass {
    if (boardingPass.length !== 10) {
      throw new Error(`Invalid pass ${boardingPass}`);
    }

    const rowStr = boardingPass.slice(0, 7);
    const columnStr = boardingPass.slice(7);

    const pass = {
      row: BoardingPassParser.toDecimalNumber(rowStr, 'B'),
      column: BoardingPassParser.toDecimalNumber(columnStr, 'R'),
    }

    return BoardingPassParser.addID(pass);
  }

  private static toDecimalNumber(str: string, highChar: string): number {
    const strAsBinary = str.replace(new RegExp(highChar, 'g'), '1').replace(/\D/g, '0');
    const strAsDecimal =  parseInt(strAsBinary, 2);

    if (isNaN(strAsDecimal)) {
      throw new Error(`Unable to convert ${str}`);
    }

    return strAsDecimal;
  }

  private static addID(pass: BoardingPassPartial): BoardingPass {
    return {
      ...pass,
      id: (pass.row * 8) + pass.column
    }
  }
}