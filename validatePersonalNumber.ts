export const validatePersonalNumber = (personalNumber: string): boolean => {
  if (personalNumber.includes("-")) {
    personalNumber = personalNumber.replace("-", "");
  }
  const regexContainsLetters = /[a-zA-Z]/g;
  const month = personalNumber.substring(2, 4);
  const day = personalNumber.substring(4, 6);

  if (personalNumber === "") {
    return false;
  } else if (personalNumber.length !== 10) {
    return false;
  } else if (personalNumber.match(regexContainsLetters)) {
    return false;
  } else if (month > "12" || month < "01") {
    return false;
  } else if (day > "31" || day < "01") {
    return false;
  } else {
    return true;
  }
};
