<template>
  <v-container>
    <h1>Home</h1>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="3">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="item.image" height="250px" />
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.text }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { items } from "@/helpers/constants";

@Component
export default class HomeView extends Vue {
  items = items;
}
</script>
