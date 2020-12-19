import { PassportKeys } from './passport.model';

function digitTest(data: string, amount: number): boolean {
  const testRegex = new RegExp(`^\\d{${amount}}$`);
  return testRegex.test(data);
}

function rangeTest(data: string, min: number, max: number): boolean {
  const dataAsNumber = Number(data);
  return isNaN(dataAsNumber)
  ? false
  : (dataAsNumber >= min && dataAsNumber <= max);
}

function heightTest(data: string): boolean {
  const inch = /^\d{2}in$/.test(data);
  const cm = /^\d{3}cm$/.test(data);

  if (inch) {
    return rangeTest(data.slice(0, 2), 59, 76);
  } else if (cm) {
    return rangeTest(data.slice(0, 3), 150, 193);
  }

  return false;
}

const hairColorTest = /^#[\da-f]{6}$/;
const eyeColorTest = /^amb|blu|brn|gry|grn|hzl|oth$/;

export function passportDataValidator(key: PassportKeys, data: string): boolean {
  switch (key) {
    case PassportKeys.BirthYear:
      return digitTest(data, 4) && rangeTest(data, 1920, 2002);
    case PassportKeys.IssueYear:
      return digitTest(data, 4) && rangeTest(data, 2010, 2020);
    case PassportKeys.ExpirationYear:
      return digitTest(data, 4) && rangeTest(data, 2020, 2030);
    case PassportKeys.Height:
      return heightTest(data);
    case PassportKeys.HairColor:
      return hairColorTest.test(data);
    case PassportKeys.EyeColor:
      return eyeColorTest.test(data);
    case PassportKeys.PassportID:
      return digitTest(data, 9);
    case PassportKeys.CountryID:
    default:
        return true;
  }
}