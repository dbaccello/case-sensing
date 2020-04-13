import { isLowerCase, isUpperCase, isSentenceCase } from "./index";

describe("isLowerCase(text, rate)", () => {
  const success = "i like climbing mountains";
  const fail = "i like climbing MOUNTAINS";
  it(`given a non-string or an empty string should throw an error'`, () => {
    expect(() => {
      isLowerCase(13);
    }).toThrow();
    expect(() => {
      isLowerCase("");
    }).toThrow();
  });
  it(`given an invalid value for 'rate' outside the range 0 to 100 should throw an error`, () => {
    expect(() => {
      isLowerCase(success, 110);
    }).toThrow();
    expect(() => {
      isLowerCase(success, -10);
    }).toThrow();
  });
  it(`given a string with all letters in lowercase should return 'true'`, () => {
    expect(isLowerCase(success)).toBeTruthy();
  });
  it(`given a string with one or more uppercase letters should return 'false'`, () => {
    expect(isLowerCase(fail)).toBeFalsy();
  });
});

describe("isUpperCase(text, rate)", () => {
  const success = "I LIKE CLIMBING MOUNTAINS";
  const fail = "I LIKE CLIMBING mountains";
  it(`given a non-string or an empty string should throw an error'`, () => {
    expect(() => {
      isUpperCase(13);
    }).toThrow();
    expect(() => {
      isUpperCase("");
    }).toThrow();
  });
  it(`given an invalid value for 'rate' outside the range 0 to 100 should throw an error`, () => {
    expect(() => {
      isUpperCase(success, 110);
    }).toThrow();
    expect(() => {
      isUpperCase(success, -10);
    }).toThrow();
  });
  it(`given a string with all letters in uppercase should return 'true'`, () => {
    expect(isUpperCase(success)).toBeTruthy();
  });
  it(`given a string with one or more lowercase letters should return 'false'`, () => {
    expect(isUpperCase(fail)).toBeFalsy();
  });
});

describe("isSentenceCase(text, rate)", () => {
  const success = "I like climbing mountains";
  const fail = "i like climbing mountains";
  it(`given a non-string or an empty string should throw an error'`, () => {
    expect(() => {
      isSentenceCase(13);
    }).toThrow();
    expect(() => {
      isSentenceCase("");
    }).toThrow();
  });
  it(`given an invalid value for 'rate' outside the range 0 to 100 should throw an error`, () => {
    expect(() => {
      isSentenceCase(success, 110);
    }).toThrow();
    expect(() => {
      isSentenceCase(success, -10);
    }).toThrow();
  });
  it(`given a string with only first letter in uppercase and all others in lowercase should return 'true'`, () => {
    expect(isSentenceCase(success)).toBeTruthy();
  });
  it(`given a string with the first letter in lowercase should return 'false'`, () => {
    expect(isSentenceCase(fail)).toBeFalsy();
  });
});
