import { ContactType } from "./database";
import { CoordinatesType } from "./coordinates";

export const getCoordinatesWithContact = (
  contact: ContactType,
  coordinates: CoordinatesType
) => {
  console.log({ lat: coordinates.latitude, lng: coordinates.longitude });
  return {
    ...contact,
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };
};
