import { validateEmail } from "../dataValidation/validateEmail";

describe("validateEmail", () => {
  it("should return true if the email is valid", () => {
    const actualResponse = validateEmail("anna.andersson@gmail.com");
    const expectedResponse = true;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("@gmail.com");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("anna.anderssongmail.com");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("anna.andersson@.com");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("anna.andersson@gmail.");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("anna.andersson@gmail");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("gmail.com");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should return false if the email is invalid", () => {
    const actualResponse = validateEmail("anna.andersson.gmail.com");
    const expectedResponse = false;
    expect(actualResponse).toEqual(expectedResponse);
  });
});
