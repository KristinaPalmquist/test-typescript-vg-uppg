import { getCoordinates } from "./coordinates";


describe("Coordinates", () => {
  it("should return coordinates", async () => {
    const contact = {
      city: "Värnamo",
      country: "Sweden",
    };
    const coordinates = await getCoordinates(contact.city, contact.country);
    expect(coordinates).toEqual({ lat: 57.186757, lng: 14.034516 });
  });
});
