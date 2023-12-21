import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { makeApp } from "./app";
import { get } from "http";
import { ContactType } from "./database";
import { CoordinatesType, getCoordinates } from "./coordinates";
import { getCoordinatesWithContact } from "./getCoordinatesWithContact";

const createContact = jest.fn();
const getContact = jest.fn();
const getContacts = jest.fn();

export const app = makeApp({ createContact, getContact });

export const server = {};

const port = 8081;

app.get("/contacts", async (req: Request, res: Response) => {
  const contacts = await getContacts();
  res.json(contacts);
});

app.get("/contact/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = await getContact(id);
  const coordinates = await getCoordinates(contact.city, contact.country);

  if (contact && coordinates) {
    const contactWithCoordinates = getCoordinatesWithContact(
      contact.toObject(),
      coordinates
    );
    res.json(contactWithCoordinates);
  } else {
    res.status(500);
  }
});

app.post("/contact", async (req: Request, res: Response) => {
  const newContact = await createContact(req.body);
  res.json(newContact);
});

mongoose
  .connect(`mongodb://localhost:${port}/contacts`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on\n http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
