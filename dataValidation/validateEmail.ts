export const validateEmail = (email: string): boolean => {
  const emailRegex =
    /(?<localPart>(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d])@(?<domainPart>((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d])\.){1,2}(?<topLevelDomain>[a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}/;

  if (email === "") {
    return false;
  } else if (email.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};
