import { ContactType } from "./database";
import { CoordinatesType } from "./coordinates";

export const getCoordinatesWithContact = (
  contact: ContactType,
  coordinates: CoordinatesType
) => {
  return {
    ...contact,
    lat: coordinates.lat,
    lng: coordinates.lng,
  };
};
