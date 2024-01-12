// import { Request, Response } from "express";
import mongoose from "mongoose";
import { makeApp } from "./app";
import {  createContact, getContactById, getContacts } from "./database";

const port = 8081;

export const app = makeApp({ createContact, getContactById, getContacts });

export const server = {};

mongoose
  .connect(`mongodb://localhost:${port}/contact`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Open link\n http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
