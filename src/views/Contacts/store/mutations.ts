import { MutationTree } from "vuex";
import { Contact, ContactForm } from "@/views/Contacts/types";

export const mutations: MutationTree<Contact> = {
  setSubmitData(state, data: ContactForm) {
    state.contactForm = data;
  },
  errorLog(state, err: string) {
    state.errorLog = err;
  }
};
