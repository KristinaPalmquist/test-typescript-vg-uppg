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

type CreateContactFunction = (contactData: ContactType) => Promise<ContactType>;
type GetContactsFunction = () => Promise<ContactType[]>;
type GetContactById = (id: string) => Promise<ContactType | null>;

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

const ContactModel = mongoose.model("contact", contactSchema);

export const createContact: CreateContactFunction = async (
  contactData: ContactType
): Promise<ContactType> => {
  return (await new ContactModel(contactData).save()).toObject();
};

export const getContacts: GetContactsFunction = async (): Promise<
  ContactType[]
> => {
  return await ContactModel.find();
};
export const getContactById: GetContactById = async (
  id: string
): Promise<ContactType | null> => {
  return await ContactModel.findById(id);
};
export const isValidId = (id: string) => mongoose.Types.ObjectId.isValid(id);
