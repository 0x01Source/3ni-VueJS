<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="container mx-auto max-w-4xl bg-white rounded-3xl shadow-lg p-6">
      <div class="flex items-center justify-between mb-6">
        <img src="../../assets/logo.png" alt="Logo" class="w-16" />
        <div class="flex space-x-4">
          <router-link to="/">
            <button class="btn-main">Back to Home</button>
          </router-link>
          <button v-if="userData.slug" class="btn-main h-10 flex items-center">
            <router-link :to="{ name: 'ProfilePage', params: { username: userData.slug } }" class="flex items-center">
              <div class="w-6 h-6 mr-2 rounded-full overflow-hidden">
                <img :src="userData.avatar" class="w-full h-full object-cover" alt="User Avatar" />
              </div>
              <span class="">{{ userData.username }}</span>
            </router-link>
          </button>
        </div>
      </div>
      <div class="border-b border-gray-200 mb-6">
        <div class="flex space-x-4">
          <button @click="currentTab = 'information'" :class="{ 'tab-active': currentTab === 'information' }"
            class="tab-button">
            Information
          </button>
          <button @click="currentTab = 'social'" :class="{ 'tab-active': currentTab === 'social' }" class="tab-button">
            Social Media
          </button>
          <button @click="currentTab = 'link'" :class="{ 'tab-active': currentTab === 'link' }" class="tab-button">
            Links
          </button>
        </div>
      </div>

      <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <component :is="currentComponent" class="p-6" />
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarComponent from "@/components/NavbarComponent.vue";
import EditinformationComponent from "@/components/EditprofilePage/EditinformationComponent.vue";
import EditsocialComponent from "@/components/EditprofilePage/EditsocialComponent.vue";
import EditlinksComponent from "@/components/EditprofilePage/EditlinksComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    EditinformationComponent,
    EditsocialComponent,
    EditlinksComponent,
    FooterComponent,
  },
  data() {
    return {
      userData: {
        username: "",
        avatar: "",
        slug: "",
      },
      isLoggedIn: false,
      activeTab: "info",
      currentTab: "information",
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentTab) {
        case "information":
          return EditinformationComponent;
        case "social":
          return EditsocialComponent;
        case "link":
          return EditlinksComponent;
      }
    },
  },
  created() {
    this.checkAuthentication();
  },
  methods: {
    async checkAuthentication() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Fetch user authentication data
          const authResponse = await axios.get("/auth/users/me/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Fetch profile data
          const profileResponse = await axios.get(
            `/api/profiles/${this.$route.params.username}/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          this.userData = {
            username:
              profileResponse.data.first_name +
              " " +
              profileResponse.data.last_name, // Combine first and last names
            avatar: profileResponse.data.avatar,
            slug: profileResponse.data.slug,
          };
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
        this.isLoggedIn = false;
      }
    },
  },
};
</script>
<style scoped>
.tab-button {
  @apply flex-1 text-gray-600 py-3 px-4 text-center cursor-pointer transition-colors duration-300 ease-in-out;
}

.tab-active {
  @apply text-[#dfa027] border-b-2 border-[#dfa027];
}

.btn-main {
  @apply px-4 py-2 rounded-full text-white bg-[#dfa027] hover:bg-[#ffc456] transition-colors duration-300 ease-in-out flex items-center space-x-2;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  @apply opacity-0;
}
</style>
