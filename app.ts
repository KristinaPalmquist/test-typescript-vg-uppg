import express, { json } from "express";
import { ContactType, createContact, getContact } from "./database";
import { validateText } from "./validateText";
import { validateEmail } from "./validateEmail";
import { validatePersonalNumber } from "./validatePersonalNumber";
import { validateZipCode } from "./validateZipCode";

export type AppProps = {
  createContact: (contact: ContactType) => ContactType;
  getContact: (id: string) => ContactType;
};

export const makeApp = ({ createContact, getContact }: AppProps) => {
  const app = express();
  app.use(json());

  app.post("/contact", async (req, res) => {
    const errors = [];

    if (!req.body.firstname || req.body.firstname === 0) {
      errors.push({ error: "Firstname is required" });
    }
    if (!req.body.lastname || req.body.lastname === 0) {
      errors.push({ error: "Lastname is required" });
    }
    if (!req.body.email || req.body.email === 0) {
      errors.push({ error: "Email is required" });
    }
    if (!req.body.personalnumber || req.body.personalnumber === 0) {
      errors.push({ error: "Personalnumber is required" });
    }
    if (!req.body.address || req.body.address === 0) {
      errors.push({ error: "Address is required" });
    }
    if (!req.body.zipCode || req.body.zipCode === 0) {
      errors.push({ error: "Zipcode is required" });
    }
    if (!req.body.city || req.body.city === 0) {
      errors.push({ error: "City is required" });
    }
    if (!req.body.country || req.body.country === 0) {
      errors.push({ error: "Country is required" });
    }
    if (errors.length) {
      return res.status(400).json({ errors });
    } else {
      try {
        validateText(req.body.firstname);
        validateText(req.body.lastname);
        validateEmail(req.body.email);
        validatePersonalNumber(req.body.personalnumber);
        validateText(req.body.address);
        validateZipCode(req.body.zipCode);
        validateText(req.body.city);
        validateText(req.body.country);
      } catch (error) {
        return res.status(400)
        // .json({ error: "Something went wrong" });
      }
      const contact = await createContact(req.body);
      res.json(contact);
      return res.status(200)
      // .json({ message: "Contact created" });
    }
  });

  app.get("/contact/:id", async (req, res) => {
    const contact: ContactType = await getContact(req.params.id);
    res.json(contact);
    return res.status(200)
    // .json({ message: "Contact fetched" });
  });

  return app;
};
