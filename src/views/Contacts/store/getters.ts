import { GetterTree } from "vuex";
import { Contact } from "@/views/Contacts/types";
import { RootState } from "@/store/RootState";

export const getters: GetterTree<Contact, RootState> = {
  getContactData(state): any {
    return state.contactForm;
  }
};
