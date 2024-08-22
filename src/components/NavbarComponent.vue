<template>
  <div v-if="$route.path === '/'" class="bg-[#dfa027] px-5 py-14">
    <div class="navbar bg-base-100 px-10 py-4 lg:w-2/3 mx-auto rounded-full fixed top-6 left-0 right-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-4 shadow">
            <router-link to="/">
              <li>
                <a class="px-2 py-2 rounded-full"><i class="fa-solid fa-house"></i>Home</a>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <a class="px-2 py-2 rounded-full"><i class="fa-solid fa-cart-shopping"></i>Cart</a>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <a class="px-2 py-2 rounded-full"><i class="fa-solid fa-circle-info"></i>About</a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <img src="../assets/logo.png" alt="Logo" class="w-16" />
      </div>
      <div class="navbar-end">
        <button v-if="!isLoggedIn" class="px-4 py-2 rounded-full text-white bg-[#dfa027] hover:bg-[#ffc456] btn">
          <router-link to="/signup"> Get Started </router-link>
        </button>

        <div v-else class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn bg-gray-200 px-4 py-2 rounded-full">
            <div class="w-10">
              {{ userData.username }}
            </div>
          </div>
          <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-4 shadow">
            <router-link :to="{
              name: 'ProfilePage',
              params: { username: userData.username },
            }">
              <li>
                <a class="px-2 py-2 rounded-full font-bold bg-gray-100 mb-2">
                  {{ userData.username }}
                </a>
              </li>
            </router-link>

            <router-link to="/settings">
              <li>
                <a class="px-2 py-2 rounded-full"><i class="fa-solid fa-gear"></i>Settings</a>
              </li>
            </router-link>
            <li>
              <a class="px-2 py-2 rounded-full" @click="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      profile: null,
      userData: {
        email: "",
        id: "",
        username: "",
      },
      isLoggedIn: false,
    };
  },
  created() {
    this.checkAuthentication();
  },
  methods: {
    async checkAuthentication() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("/auth/users/me/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.userData = response.data;
          console.log(this.userData);
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
        this.isLoggedIn = false;
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      this.$router.push("/login");
    },
  },
};
</script>
