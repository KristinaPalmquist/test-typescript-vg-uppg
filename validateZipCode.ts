export const validateZipCode = (zipCode: string): boolean => {
  const regexContainsLetters = /[a-zA-Z]/g;

  if (zipCode.includes(" ")) {
    zipCode = zipCode.replace(" ", "");
  }

  if (zipCode.length !== 5) {
    return false;
  } else if (zipCode.match(regexContainsLetters)) {
    return false;
  } else {
    return true;
  }
};
