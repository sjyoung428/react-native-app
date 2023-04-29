import * as EmailValidator from "email-validator";

export const emailValidator = (text: string) => {
  return EmailValidator.validate(text);
};
