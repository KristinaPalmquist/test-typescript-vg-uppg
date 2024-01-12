import { validatePersonalNumber } from "../dataValidation/validatePersonalNumber";

describe("validatePersonalNumber", () => {
  it("should return true if personal number is valid", () => {
    const actualResponse = validatePersonalNumber("550713-1405");
    const expectedResponse = true;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("550713-140");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("550713-140B");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("50713-1405");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("550713");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("550713-14051");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("1550713-1405");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("551713-1405");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if personal number is invalid", () => {
    const actualResponse = validatePersonalNumber("550773-1405");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
});
