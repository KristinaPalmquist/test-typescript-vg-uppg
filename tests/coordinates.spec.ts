import { getCoordinates } from "../coordinates";
import nock from "nock";

export const coordinatesMock = {
  name: "Värnamo",
  latitude: 57.1832,
  longitude: 14.0478,
  country: "Sweden",
};

describe("Coordinates", () => {
  it("should return coordinates", (done) => {
    nock(`https://api.api-ninjas.com/v1`)
      .get(`/geocoding?city=Värnamo&country=Sweden`)
      .reply(200, coordinatesMock);
    getCoordinates("Värnamo", "Sweden").then((coordinates) => {
      expect(coordinates).toEqual({
        lat: 57.1832,
        lng: 14.0478,
      });
      done();
    });
  });
  it("should return with properties lat + lng", async () => {
    nock(`https://api.api-ninjas.com/v1`)
      .get(`/geocoding?city=Värnamo&country=Sweden`)
      .reply(200, coordinatesMock);
    const contact = {
      city: "Värnamo",
      country: "Sweden",
    };
    const coordinates = await getCoordinates(contact.city, contact.country);
    expect(coordinates).toHaveProperty("lat");
    expect(coordinates).toHaveProperty("lng");
  });
  it("should return null if error", async () => {
    nock(`https://api.api-ninjas.com/v1`).get(
      `/geocoding?city=Värnamo&country=Sweden`
    );
    const contact = {
      city: "Värnermo",
      country: "Sweden",
    };
    const coordinates = await getCoordinates(contact.city, contact.country);
    expect(coordinates).toEqual({ lat: 0, lng: 0 });
  });
});
