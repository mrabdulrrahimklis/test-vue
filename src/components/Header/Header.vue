<template>
  <v-container fluid class="ma-0 pa-0 background">
    <v-row justify="end">
      <v-col cols="2">
        <RouterLink to="/" class="white--text no-underline">
          <v-btn class="ma-2" color="primary">
            Home
          </v-btn>
        </RouterLink>
        <RouterLink to="/contacts" class="white--text no-underline">
          <v-btn class="ma-2" color="primary">
            Contacts
          </v-btn>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
