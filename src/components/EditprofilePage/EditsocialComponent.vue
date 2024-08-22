<template>
  <div class="px-8 py-8 rounded-3xl">
    <div v-if="profile && profile.social_media_links">
      <div v-for="(social, index) in profile.social_media_links" :key="social.id"
        class="mb-4 flex items-center space-x-4">
        <select v-model="social.platform" class="input-field w-1/4">
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
          <option value="snapchat">Snapchat</option>
          <option value="linkedin">LinkedIn</option>
          <option value="tiktok">TikTok</option>
        </select>
        <input v-model="social.username" type="text" class="input-field w-1/2" placeholder="Username" />
        <button @click="removeSocial(index, social.id)"
          class="border-2 hover:bg-red-600 text-gray-500 hover:text-white py-2 px-4 rounded-3xl">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <button @click="addSocial()"
        class="bg-white border-2 border-[#dfa027] hover:bg-[#dfa027] hover:text-white text-[#dfa027] py-3 px-6 rounded-3xl mt-4 mr-2">
        Add Social Media Link
      </button>
      <button @click="updateSocialMedia()"
        class="bg-[#dfa027] hover:bg-opacity-80 text-white py-3 px-6 rounded-3xl mt-4 mr-2">
        Save Changes
      </button>
    </div>

    <div v-else>
      <p>Loading social media links...</p>
    </div>

    <div v-if="showToast" id="toast-success"
      class="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-3xl shadow"
      role="alert">
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-3xl">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Update Information successful!</div>
      <button type="button" @click="showToast = false"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>

    <div v-if="showErrorToast" id="toast-danger"
      class="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-3xl shadow"
      role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
        <span class="sr-only">Error icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">{{ errorMessage }}</div>
      <button type="button" @click="showErrorToast = false"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-3xl focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      profile: {
        social_media_links: [],
      },
      showToast: false,
      showErrorToast: false,
      errorMessage: "",
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      axios
        .get(`/api/profiles/${this.$route.params.username}/`)
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    },
    addSocial() {
      this.profile.social_media_links.push({
        platform: "facebook",
        username: "",
      });
    },
    removeSocial(index) {
      const social = this.profile.social_media_links[index];

      if (!this.socialsToDelete) {
        this.socialsToDelete = [];
      }
      this.socialsToDelete.push(social);

      this.profile.social_media_links.splice(index, 1);
    },

    updateSocialMedia() {
      const token = localStorage.getItem("token");

      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const requests = [];

        if (this.socialsToDelete && this.socialsToDelete.length) {
          this.socialsToDelete.forEach((social) => {
            const request = axios.delete(social.url, { headers });
            requests.push(request);
          });
          this.socialsToDelete = [];
        }

        this.profile.social_media_links.forEach((social) => {
          let request;
          if (social.id) {
            request = axios.put(
              social.url,
              { platform: social.platform, username: social.username },
              { headers }
            );
          } else {
            request = axios.post(
              "/api/socialmedia/",
              { platform: social.platform, username: social.username },
              { headers }
            );
          }
          requests.push(request);
        });

        Promise.all(requests)
          .then(() => {
            this.showToast = true;
            setTimeout(() => {
              this.showToast = false;
            }, 3000);
          })
          .catch((error) => {
            this.showErrorToast = true;
            this.errorMessage =
              "Failed to update social media links. Please try again.";
            console.error("Error updating social media links:", error);
            setTimeout(() => {
              this.showErrorToast = false;
            }, 3000);
          });
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 mt-1 rounded-3xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#dfa027] focus:ring-[#dfa027] focus:ring-1 transition-colors duration-300;
}

.input-field::placeholder {
  color: black;
}
</style>
