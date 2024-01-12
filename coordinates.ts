import axios from "axios";

export type CoordinatesType = {
  lat: number;
  lng: number;
};

export const getCoordinates = async (
  city: string,
  country: string
): Promise<CoordinatesType> => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`
    );
    const coordinates: CoordinatesType = {
      lat: response.data.latitude,
      lng: response.data.longitude,
    };
    return coordinates;
  } catch (error) {
    console.log("An error has occured");
    return { lat: 0, lng: 0 };
  }
};
