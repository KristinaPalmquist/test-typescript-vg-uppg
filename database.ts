import mongoose from "mongoose";

export type ContactType = {
  firstname: string;
  lastname: string;
  email: string;
  personalnumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

const contactSchema = new mongoose.Schema<ContactType>({
  firstname: String,
  lastname: String,
  email: String,
  personalnumber: String,
  address: String,
  zipCode: String,
  city: String,
  country: String,
});

const ContactModel = mongoose.model<ContactType>("Contact", contactSchema);

export const createContact = async (contact: ContactType) => {
  return await new ContactModel(contact).save();
};

export const getContacts = async () => {
  return await ContactModel.find();
};
export const getContact = async (id: string) => {
  return await ContactModel.findById(id);
};

// const connectionString = process.env.MONGO_CONNECTION_STRING;
// const databaseName = process.env.MONGO_DATABASE_NAME;

// export const connect = () => {
//   mongoose
//     .connect(`${connectionString}/${databaseName}`, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//       // useCreateIndex: true
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log(err));
// };
