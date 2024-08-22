<template>
  <div class="edit-page-container px-8 pb-4 rounded-3xl mt-20">
    <form @submit.prevent="updateProfile">
      <div class="flex justify-center">
        <div class="relative w-40 h-40">
          <img alt="Avatar" :src="profile.avatar"
            class="shadow-xl rounded-full h-full w-full align-middle border-none object-cover"
            style="margin-top: -80px" />
          <label for="dropzone-file"
            class="absolute inset-0 flex items-center justify-center rounded-full cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 opacity-80 z-10"
            style="margin-top: -80px; width: 100%; height: 100%">
            <div class="flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p class="ml-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span>
              </p>
            </div>
            <input @change="handleAvatarUpload" id="dropzone-file" type="file" accept="image/*" class="hidden" />
          </label>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-2">
        <div class="form-group">
          <label class="text-sm pl-2">First Name</label>
          <input v-model="profile.first_name" type="text" class="input-field" />
        </div>
        <div class="form-group">
          <label class="text-sm pl-2">Last Name</label>
          <input v-model="profile.last_name" type="text" class="input-field" />
        </div>
      </div>

      <button type="submit" class="bg-[#dfa027] hover:bg-opacity-80 text-white py-3 px-6 rounded-3xl mt-4">
        Update Profile
      </button>
    </form>

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
  name: "EditPage",
  data() {
    return {
      profile: {
        first_name: "",
        last_name: "",
        avatar: null,
      },
      showToast: false,
      showErrorToast: false,
      errorMessage: "",
    };
  },
  methods: {
    async fetchProfile() {
      try {
        const response = await axios.get(
          `/api/profiles/${this.$route.params.username}/`
        );
        this.profile = response.data;
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },

    handleAvatarUpload(event) {
      const file = event.target.files[0];
      this.profile.avatar = file;
    },
    async updateProfile() {
      try {
        const formData = new FormData();
        Object.keys(this.profile).forEach((key) => {
          if (this.profile[key] !== null) {
            formData.append(key, this.profile[key]);
          }
        });

        const token = localStorage.getItem("token");

        await axios.put(
          `/api/profiles/${this.$route.params.username}/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.showToast = true;
        setTimeout(() => (this.showToast = false), 3000);
      } catch (error) {
        this.errorMessage =
          error.response?.data?.detail || "Error updating profile";
        this.showErrorToast = true;
        setTimeout(() => (this.showErrorToast = false), 3000);
        console.error("Error updating profile:", error);
      }
    },
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 mt-1 rounded-3xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#dfa027] focus:ring-[#dfa027] focus:ring-1 transition-colors duration-300;
}
</style>
