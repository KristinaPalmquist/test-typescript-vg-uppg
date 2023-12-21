import { coordinatesMock } from "./coordinates";
import { getCoordinatesWithContact } from "./getCoordinatesWithContact";

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
    const actual = await getCoordinatesWithContact(contact, coordinatesMock);

    expect(actual).toEqual({
      firstname: "Bo",
      lastname: "Testsson",
      email: "bo@home.se",
      personalnumber: "711111-1111",
      address: "Hemvägen 1",
      zipCode: "71111",
      city: "Värnamo",
      country: "Sverige",
      lat: 59.32932349999999,
      lng: 18.0685808,
    });
  });
});
