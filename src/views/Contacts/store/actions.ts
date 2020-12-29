import { ActionTree } from "vuex";
import { RootState } from "@/store/RootState";
import axios, { AxiosResponse } from "axios";
import { ContactForm, Contact } from "@/views/Contacts/types";
import { baseURL } from "@/services";

export const actions: ActionTree<Contact, RootState> = {
  submitForm(context, contactForm: ContactForm) {
    axios
      .post(baseURL, contactForm)
      .then((response: AxiosResponse) => {
        context.commit("setSubmitData", response.data);
      })
      .catch(err => {
        context.commit("errorLog", err);
      });
  }
};
