import * as EmailValidator from "email-validator";

type ValidatorType = "email" | "password" | "username";

export const validator = (text: string, type: ValidatorType) => {
  if (type === "email") {
    return EmailValidator.validate(text);
  }

  if (type === "password") {
    return text.length >= 8;
  }

  if (type === "username") {
    return text.length >= 2;
  }

  return false;
};
