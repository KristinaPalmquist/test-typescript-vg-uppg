import request from "supertest";
// import assert from "assert";
import { app } from "./server";

app.get("/contact", function (req, res) {
  res.status(200).json({ name: "john" });
});

describe("POST /contact", function () {
  it("responds with 200", function (done) {
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
      .expect(200, done)
      .expect({
        firstname: "John",
        lastname: "Doe",
        email: "john@doe.com",
        personalnumber: "123456-7890",
        address: "Street 1",
        zipCode: "123 45",
        city: "Örebro",
        country: "Sweden",
      })
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("hej", () => {
  it("responds with json", function (done) {
    request(app)
      .get("/contact")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200, done)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
