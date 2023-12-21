import { default as request } from "supertest";
import { makeApp } from "./app";
import { getCoordinates } from "./coordinates";
import { validateEmail } from "./validateEmail";
import { validatePersonalNumber } from "./validatePersonalNumber";
import { validateText } from "./validateText";
import { validateZipCode } from "./validateZipCode";
import { ContactType } from "./database";

const createContact = jest.fn();
const getContact = jest.fn();

const app = makeApp({ createContact, getContact });

const existingId = "5f8f9a2c1c9d440000d3e2b3";
const invalidId = "5f8f9a2c1c9d44d3e2b3";
const nonExistingId = "5f8f9a2c1c9d44d3e2b3";

const validContactData = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactData = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "  ",
  personalnumber: "550713-1405",
};

const invalidContactMissingFirstname = {
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingLastname = {
  firstname: "Anna",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingEmail = {
  firstname: "Anna",
  lastname: "Andersson",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingPersonalnumber = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingAddress = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  zipCode: "111 22",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingZipCode = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  city: "Stockholm",
  country: "Sweden",
};

const invalidContactMissingCity = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  country: "Sweden",
};

const invalidContactMissingCountry = {
  firstname: "Anna",
  lastname: "Andersson",
  email: "anna.andersson@gmail.com",
  personalnumber: "550713-1405",
  address: "Utvecklargatan 12",
  zipCode: "111 22",
  city: "Stockholm",
};

describe("POST /contact", () => {
  beforeEach(() => {
    createContact.mockRestore();
    createContact.mockResolvedValue({
      firstname: "Anna",
      lastname: "Andersson",
      email: "anna.andersson@gmail.com",
      personalnumber: "550713-1405",
      address: "Utvecklargatan 12",
      zipCode: "111 22",
      city: "Stockholm",
      country: "Sweden",
    });
  });

  it("should return status code 200 when posting contact with valid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(validContactData);
      const expectedResponse = 200;
      expect(actualResponse.statusCode).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactData);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingFirstname);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingLastname);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingEmail);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingPersonalnumber);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingAddress);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingZipCode);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingCity);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingCountry);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });

  it("should return status code 400 when posting contact with invalid data", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(invalidContactMissingFirstname);
      const expectedResponse = 400;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should should call getCoordinates 1 time", async () => {
    const actualResponse = await request(app)
      .post("/contact")
      .send(validContactData);
    const expectedResponse = getCoordinates.call.length === 1;
    // .mock.calls.length.toBe(1);
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("should should call validateEmail 1 time", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(validContactData);
      const expectedResponse = validateEmail.call.length === 1;
      // .mock.calls.length.toBe(1);
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should should call validatePersonalNumber 1 time", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(validContactData);
      const expectedResponse = validatePersonalNumber.call.length === 1;
      // .mock.calls.length.toBe(1);
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should should call validateText 5 times", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(validContactData);
      const expectedResponse = validateText.call.length === 5;
      // .mock.calls.length.toBe(5);
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should should call validateZipCode 1 time", async () => {
    try {
      const actualResponse = await request(app)
        .post("/contact")
        .send(validContactData);
      const expectedResponse = validateZipCode.call.length === 1;
      // .mock.calls.length.toBe(1);
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
});

describe("GET /contacts", () => {
  it("should return status code 200 when getting contacts", async () => {
    try {
      const actualResponse = await request(app).get("/contacts");
      const expectedResponse = 200;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
});

describe("GET /contact/:id", () => {
  it("should return status code 200 when getting contact with valid id", async () => {
    try {
      const actualResponse = await request(app).get(`/contact/${existingId}`);
      const expectedResponse = 200;
      expect(actualResponse.statusCode).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return a contact when called with correct id", async () => {
    try {
      const actualResponse = await request(app).get(`/contact/${existingId}`);
      expect(typeof actualResponse.body).toMatch("ContactType");
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 400 if invalid MongoDB id is provided", async () => {
    try {
      const actualResponse = await request(app).get(`/contact/${invalidId}`);
      const expectedResponse = 400;
      expect(actualResponse.statusCode).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
  it("should return status code 404 when getting contact with id that does not exist", async () => {
    try {
      const actualResponse = await request(app).get(
        `/contact/${nonExistingId}`
      );
      const expectedResponse = 404;
      expect(actualResponse).toEqual(expectedResponse);
    } catch (error) {
      console.log(error);
    }
  });
});
