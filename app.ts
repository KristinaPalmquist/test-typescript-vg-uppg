import express, { json, Request, Response } from "express";
import mongoose from "mongoose";
import { ContactType } from "./database";
import { validateText } from "./dataValidation/validateText";
import { validateEmail } from "./dataValidation/validateEmail";
import { validatePersonalNumber } from "./dataValidation/validatePersonalNumber";
import { validateZipCode } from "./dataValidation/validateZipCode";
import { getCoordinatesWithContact } from "./getCoordinatesWithContact";
import { getCoordinates } from "./coordinates";

export type AppProps = {
  createContact: (contactData: ContactType) => Promise<ContactType>;
  getContactById: (id: string) => Promise<ContactType | null>;
  getContacts: () => Promise<ContactType[]>;
};

export const makeApp = ({
  createContact,
  getContactById,
  getContacts,
}: AppProps) => {
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
      validateText(req.body.firstname);
      validateText(req.body.lastname);
      validateEmail(req.body.email);
      validatePersonalNumber(req.body.personalnumber);
      validateText(req.body.address);
      validateZipCode(req.body.zipCode);
      validateText(req.body.city);
      validateText(req.body.country);
      const coordinates = await getCoordinates(req.body.city, req.body.country);
      const newContact = getCoordinatesWithContact(req.body, coordinates);
      const contact = await createContact(req.body);
      res.json(contact);
      return res.status(200);
    }
  });

  app.get("/contacts", async (req: Request, res: Response) => {
    const contacts: ContactType[] = await getContacts();
    res.json(contacts);
    if (contacts) {
      return res.status(200);
    }
  });

  app.get("/contact/:id", async (req, res) => {
    if (mongoose.isValidObjectId(req.params.id)) {
      const contact: ContactType | null = await getContactById(req.params.id);
      if (contact) {
        return res.status(200).json(contact);
      }
    } else {
      return res.status(400).json({ error: "Id is not valid" });
    }
  });
  return app;
};
