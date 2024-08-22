import LoginPage from "@/views/Authentication/LoginPage.vue";
import SignupPage from "@/views/Authentication/SignupPage.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/Profile/ProfilePage.vue";
import EditprofilePage from "@/views/Profile/EditprofilePage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "SignupPage",
    path: "/signup",
    component: SignupPage,
  },
  {
    name: "LoginPage",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "ProfilePage",
    path: "/:username",
    component: ProfilePage,
  },
  {
    name: "EditprofilePage",
    path: "/:username/edit",
    component: EditprofilePage,
  },

  {
    name: "SettinsPage",
    path: "/settings",
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
