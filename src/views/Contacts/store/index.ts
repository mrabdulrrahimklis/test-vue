import { RootState } from "@/store/RootState";
import { Module } from "vuex";
import { Contact } from '../types'
import { actions } from "@/views/Contacts/store/actions";
import { getters } from "@/views/Contacts/store/getters";
import { mutations } from "@/views/Contacts/store/mutations";

export const state: Contact = {
  contactForm: null,
  errorLog: ""
}

export const CONTACT_FORM = "contactForm";

const namespaced = true;

export const contactForm: Module<Contact, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}