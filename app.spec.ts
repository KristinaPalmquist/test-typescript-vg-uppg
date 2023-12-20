// import { default as request } from "supertest";
// import { makeApp } from "./app";

// const app = makeApp();

// const validContactData = {
//   firstname: "Anna",
//   lastname: "Andersson",
//   email: "anna.andersson@gmail.com",
//   personalnumber: "550713-1405",
//   address: "Utvecklargatan 12",
//   zipCode: "111 22",
//   city: "Stockholm",
//   country: "Sweden",
// };

// const invalidContactData = {
//   firstname: "Anna",
//   lastname: "Andersson",
//   email: "  ",
//   personalnumber: "550713-1405",
// };

// describe("POST /contact", () => {
//   it("should return status code 200 when posting contact with valid data", async () => {
//     const actualResponse = await request(app)
//       .post("/contact")
//       .send(validContactData);
//     const expectedResponse = 200;
//     expect(actualResponse.statusCode).toEqual(expectedResponse);
//   });
//   it("should return status code 400 when posting contact with invalid data", async () => {
//     const actualResponse = await request(app)
//       .post("/contact")
//       .send(invalidContactData);
//     const expectedResponse = 400;
//     expect(actualResponse).toEqual(expectedResponse);
//   });
//   //   it("should should call getCoordinates 1 time", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should should call validateEmail 1 time", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should should call validatePersonalNumber 1 time", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should should call  3 times", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should should call validateZipCode 1 time", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   // });

//   // describe("GET /contact/:id", () => {
//   //   it("should return status code 200 when getting contact with valid id", () => {
//   //     const actualResponse = "Andersson";
//   //     const expectedResponse = 200;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should return a contact when called with correct id", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should return status code 400 if invalid MongoDB id is provided", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should return status code 400 when getting contact with invalid id", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 400;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
//   //   it("should return status code 404 when getting contact with id that does not exist", () => {
//   //     const actualResponse = "";
//   //     const expectedResponse = 404;
//   //     expect(actualResponse).toEqual(expectedResponse);
//   //   });
// });
