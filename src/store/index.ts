import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/RootState";
import createPersistedState from "vuex-persistedstate";
import { contactForm } from "@/views/Contacts/store";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  plugins: [createPersistedState()],
  state: {
    version: "1.0.0"
  },
  modules: {
    contactForm
  }
};

export default new Vuex.Store<RootState>(store);
