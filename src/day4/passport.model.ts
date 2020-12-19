export enum PassportKeys {
  BirthYear = 'byr',
  IssueYear = 'iyr',
  ExpirationYear = 'eyr',
  Height = 'hgt',
  HairColor = 'hcl',
  EyeColor = 'ecl',
  PassportID = 'pid',
  CountryID = 'cid'
}

export const PassportKeyMandatory: Map<PassportKeys, boolean> = new Map([
  [PassportKeys.BirthYear, true],
  [PassportKeys.IssueYear, true],
  [PassportKeys.ExpirationYear, true],
  [PassportKeys.Height, true],
  [PassportKeys.HairColor, true],
  [PassportKeys.EyeColor, true],
  [PassportKeys.PassportID, true],
  [PassportKeys.CountryID, false],
]);