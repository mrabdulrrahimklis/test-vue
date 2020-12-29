<template>
  <v-container>
    <h1>Contact</h1>
    <v-row>
      <v-col cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            label="E-mail"
            :rules="emailRules"
            hide-details="auto"
            class="my-3"
          />
          <v-textarea
            outlined
            label="Message"
            placeholder="Let us know what"
            class="my-3"
            :rules="textRules"
          />
          <v-btn class="my-3" color="primary" @click="submitForm">
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { CONTACT_FORM } from "@/views/Contacts/store";

@Component
export default class ContactsView extends Vue {
  @Action("submitForm", { namespace: CONTACT_FORM })
  submitFormAction!: Function;

  valid = true;
  emailRules = [
    (v: string) =>
      !v ||
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "E-mail must be valid",
    (v: string) =>
      (v && v.length > 2) || "Email must be longer than 2 characters"
  ];
  textRules = [
    (v: string) => !!v || "Text is required",
    (v: string) =>
      (v && v.length >= 30) || "Text must be longer than 30 characters"
  ];

  submitForm() {
    if (this.validate()) {
      console.log("123", this.validate());
      this.submitFormAction();
    }
  }

  validate() {
    return (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }
}
</script>
