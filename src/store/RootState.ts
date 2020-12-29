import { Contact } from "@/views/Contacts/types";

export interface RootState {
  version: string;
  contactForm?: Contact;
}
