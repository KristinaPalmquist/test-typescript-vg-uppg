import request from "supertest";
import { makeApp } from "../app";
import nock from "nock";

const createContact = jest.fn();
let getContactById = jest.fn();
const getContacts = jest.fn();
const app = makeApp({ createContact, getContactById, getContacts });

export const existingId = "638cfd06f84b41a7be61ebad";
const invalidId = "638cfd06f84b41a7be61ebadebad";
const nonExistingId = "5c0a7922c9d89830f4911426";

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

const validContacts = [
  {
    id: "638cfd06f84b41a7be61ebad",
    firstname: "Anna",
    lastname: "Andersson",
    email: "anna.andersson@gmail.com",
    personalnumber: "550713-1405",
    address: "Utvecklargatan 12",
    zipCode: "111 22",
    city: "Stockholm",
    country: "Sweden",
    lat: 59.3251172,
    lng: 18.0710935,
  },
  {
    id: "638cfd06f84b41a7be61eadb",
    firstname: "Erik",
    lastname: "Eriksson",
    email: "erik.eriksson@gmail.com",
    personalnumber: "740301-1405",
    address: "Utvecklargatan 12",
    zipCode: "111 22",
    city: "Stockholm",
    country: "Sweden",
    lat: 59.3251172,
    lng: 18.0710935,
  },
];

export const coordinatesMock = {
  name: "Stockholm",
  latitude: 59.32932349999999,
  longitude: 18.0685808,
  country: "Sweden",
};

describe("POST /contact", () => {
  beforeEach(() => {
    nock(`https://api.api-ninjas.com/v1`)
      .get(`/geocoding?city=Stockholm&country=Sweden`)
      .reply(200, coordinatesMock);
    createContact.mockRestore();
    createContact.mockResolvedValue(validContactData);
  });

  it("1.0 - responds with 200", function (done) {
    setTimeout(() => {
      request(app)
        .post("/contact")
        .send({
          firstname: "John",
          lastname: "Doe",
          email: "john@doe.com",
          personalnumber: "123456-7890",
          address: "Street 1",
          zipCode: "123 45",
          city: "Örebro",
          country: "Sweden",
        })
        .expect("Content-Type", /json/)
        .expect(200, done);
    }, 1000).unref();
  });

  it("1.1 - should return status code 200 when posting contact with valid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(validContactData)
    ).statusCode;
    const expectedResponse = 200;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.2 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactData)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.3 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingFirstname)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.4 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingLastname)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.5 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingEmail)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.6 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app)
        .post("/contact")
        .send(invalidContactMissingPersonalnumber)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.7 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingAddress)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.8 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingZipCode)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.9 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingCity)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.10 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingCountry)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("1.11 - should return status code 400 when posting contact with invalid data", async () => {
    const actualResponse = (
      await request(app).post("/contact").send(invalidContactMissingFirstname)
    ).statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
});

describe("GET /contacts", () => {
  beforeEach(() => {
    getContacts.mockRestore();
    getContacts.mockResolvedValue(Promise.resolve(validContacts));
  });
  it("2.0 - responds with json", function (done) {
    setTimeout(() => {
      request(app)
        .get("/contacts")
        .expect("Content-Type", /json/)
        .expect(200, done);
    }, 1000).unref();
  });
  it("2.1 - should return status code 200 when getting contacts", async () => {
    const actualResponse = (await request(app).get("/contacts")).statusCode;
    const expectedResponse = 200;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("2.2 - should return array of contacts", async () => {
    const response = await request(app).get("/contacts");
    const actualResponse = JSON.parse(response.text);
    const expectedResponse = validContacts;
    expect(actualResponse).toEqual(expectedResponse);
  });
});

describe("GET /contact/:id", () => {
  beforeAll(() => {
    getContactById.mockRestore();
    getContactById.mockResolvedValue({
      id: "638cfd06f84b41a7be61ebad",
      firstname: "Anna",
      lastname: "Andersson",
      email: "anna.andersson@gmail.com",
      personalnumber: "550713-1405",
      address: "Utvecklargatan 12",
      zipCode: "111 22",
      city: "Stockholm",
      country: "Sweden",
      lat: 59.3251172,
      lng: 18.0710935,
    });
  });
  it("3.0 - responds with json", async () => {
    await request(app)
      .get(`/contact/${existingId}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("3.1 - should return status code 200 when getting contact with valid id", async () => {
    const actualResponse = (await request(app).get(`/contact/${existingId}`))
      .statusCode;
    const expectedResponse = 200;
    expect(actualResponse).toEqual(expectedResponse);
  });
  it("3.2 - should return object with same properties as ContactType", async () => {
    const actualResponse = JSON.parse(
      (await request(app).get(`/contact/${existingId}`)).text
    );
    expect(actualResponse).toHaveProperty("firstname");
    expect(actualResponse).toHaveProperty("lastname");
    expect(actualResponse).toHaveProperty("email");
    expect(actualResponse).toHaveProperty("personalnumber");
    expect(actualResponse).toHaveProperty("address");
    expect(actualResponse).toHaveProperty("zipCode");
    expect(actualResponse).toHaveProperty("city");
    expect(actualResponse).toHaveProperty("country");
  });
  it("3.3 - should return status code 400 if invalid MongoDB id is provided", async () => {
    const actualResponse = (await request(app).get(`/contact/${invalidId}`))
      .statusCode;
    const expectedResponse = 400;
    expect(actualResponse).toEqual(expectedResponse);
  });
  // it("3.4 - should return status code 404 when getting contact with invalid id", async () => {
  //   const actualResponse = (await request(app).get(`/contact/${invalidId}`)).status;
  //   const expectedResponse = 404;
  //   expect(actualResponse).toEqual(expectedResponse);
  // });
});
