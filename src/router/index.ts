import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { RouteName, RoutePath } from "@/router/types";
import HomeView from "@/views/Home/HomeView.vue";
import ContactsView from "@/views/Contacts/ContactsView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: RoutePath.HomeView,
    name: RouteName.HomeView,
    component: HomeView
  },
  {
    path: RoutePath.ContactsView,
    name: RouteName.ContactsView,
    component: ContactsView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
