export type CoordinatesType = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

export const coordinatesMock = {
  name: "Värnamo",
  latitude: 59.32932349999999,
  longitude: 18.0685808,
  country: "Sweden",
};

export const getCoordinates = async (city: string, country: string) => {
  (
    await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`
    )
  )
    .json()
    .then((data) => data.results[0].geometry.location);

  const response = await fetch(
    `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`
  );
  const data = await response.json();
  return data.results[0].geometry.location;
};
