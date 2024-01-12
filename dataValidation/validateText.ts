export const validateText = (text: string): boolean => {
  const regexContainsNumbers = /\d/g;

  if (text.substring(0, 1) === " ") {
    return false;
  } else if (regexContainsNumbers.test(text.substring(0, 1))) {
    return false;

  } else if (text.length < 2) {
    return false;
  } else if (text.length > 40) {
    return false;
  } else {
    return true;
  }
};
