export const validateZipCode = (zipCode: string): boolean => {
  if (zipCode.includes(" ")) {
    zipCode = zipCode.replace(" ", "");

  } 

  if (zipCode === undefined) {
    return false;
  } else if (zipCode.length !== 5) {
    return false;
  } else if (isNaN(Number(zipCode))) {
    return false;
  } else if (zipCode.length === 5 && !isNaN(Number(zipCode))) {
    return true;
  } else {
    return false;
  }
};
