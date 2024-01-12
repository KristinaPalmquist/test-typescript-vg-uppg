import { coordinatesMock } from "./coordinates.spec";
import { getCoordinatesWithContact } from "../getCoordinatesWithContact";

describe("get Coordinates With Contact", () => {
  it("should return coordinates", async () => {
    const contact = {
      firstname: "Bo",
      lastname: "Testsson",
      email: "bo@home.se",
      personalnumber: "711111-1111",
      address: "Hemvägen 1",
      zipCode: "71111",
      city: "Värnamo",
      country: "Sverige",
    };
    const coordinates = {
      lat: coordinatesMock.latitude,
      lng: coordinatesMock.longitude,
    };
    const actual = await getCoordinatesWithContact(contact, coordinates);

    expect(actual).toEqual({
      firstname: "Bo",
      lastname: "Testsson",
      email: "bo@home.se",
      personalnumber: "711111-1111",
      address: "Hemvägen 1",
      zipCode: "71111",
      city: "Värnamo",
      country: "Sverige",
      lat: 57.1832,
      lng: 14.0478,
    });
  });
});
