import { validateText } from "./validateText";

describe("validateText", () => {
  it("should return true if text is valid", () => {
    const actualResponse = validateText("Andersson");
    const expectedResponse = true;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if text is invalid", () => {
    const actualResponse = validateText("");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if text is invalid", () => {
    const actualResponse = validateText(" ");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if text is invalid", () => {
    const actualResponse = validateText("a");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if text is invalid", () => {
    const actualResponse = validateText(
      "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz"
    );
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if text is invalid", () => {
    const actualResponse = validateText("123456789");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
});
