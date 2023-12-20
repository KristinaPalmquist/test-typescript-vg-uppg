import { validateZipCode } from "./validateZipCode";

describe("validateZipCode", () => {
  it("should return true if zip code is valid", () => {
    const actualResponse = validateZipCode("111 22");
    const expectedResponse = true;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if zip code is invalid", () => {
    const actualResponse = validateZipCode("1122");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if zip code is invalid", () => {
    const actualResponse = validateZipCode("11222");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if zip code is invalid", () => {
    const actualResponse = validateZipCode("text");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
});
