<template>
  <div class="px-4 py-8 rounded-3xl lg:px-8 lg:py-8">
    <div v-if="profile && profile.links">
      <div v-for="(link, index) in profile.links" :key="link.id" class="mb-4 flex items-center space-x-4">
        <input v-model="link.title" type="text" class="input-field w-full sm:w-1/3 text-black" placeholder="Title" />
        <input v-model="link.url" type="text" class="input-field w-full sm:w-1/3 text-black" placeholder="URL" />
        <input type="file" @change="handleIconChange($event, index)"
          class="rounded-3xl border-2 border-black text-black text-base w-full sm:w-1/3" />

        <button @click="removeLink(index, link.id)"
          class="border-2 hover:bg-red-600 text-gray-500 hover:text-white py-2 px-4 rounded-3xl">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

      <button @click="addLink()"
        class="bg-white border-2 border-[#dfa027] hover:bg-[#dfa027] hover:text-white text-[#dfa027] py-3 px-6 rounded-3xl mt-4 mr-2">
        Add Link
      </button>
      <button @click="updateLinks()"
        class="bg-[#dfa027] hover:bg-opacity-80 text-white py-3 px-6 rounded-3xl mt-4 mr-2">
        Save Changes
      </button>
    </div>
    <div v-else>
      <p class="text-white">Loading links...</p>
    </div>

    <div v-if="showToast"
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
      <div class="ms-3 text-sm font-normal">{{ successMessage }}</div>
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

    <div v-if="showErrorToast"
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
        links: [],
      },
      linksToDelete: [],
      showToast: false,
      showErrorToast: false,
      successMessage: "Update Information successful!",
      errorMessage: "",
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      axios
        .get(`/api/profiles/${this.$route.params.username}`)
        .then((response) => {
          this.profile = response.data;
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    },
    addLink() {
      this.profile.links.push({ title: "", url: "", icon: null });
    },
    removeLink(index, linkId) {
      this.profile.links.splice(index, 1);

      if (!this.linksToDelete) {
        this.linksToDelete = [];
      }
      this.linksToDelete.push({ id: linkId });
    },
    handleIconChange(event, index) {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0]; 
        const reader = new FileReader();
        reader.onload = () => {
          this.profile.links[index].icon = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.log("No file selected or file selection was cancelled.");
      }
    },
    updateLinks() {
      const token = localStorage.getItem("token");

      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        if (this.linksToDelete && this.linksToDelete.length) {
          this.linksToDelete.forEach((link) => {
            axios
              .delete(`http://197.134.253.234:9100/api/links/${link.id}/`, {
                headers,
              })
              .then(() => {
                console.log(`Link for ${link.id} deleted successfully.`);
              })
              .catch((error) => {
                console.error(`Error deleting link for ${link.id}:`, error);
              });
          });
          this.linksToDelete = [];
        }

        const updatePromises = this.profile.links.map((link) => {
          if (link.id) {
            return axios
              .put(`http://197.134.253.234:9100/api/links/${link.id}/`, link, {
                headers,
              })
              .then(() => {
                console.log(`Link for ${link.id} updated successfully.`);
              })
              .catch((error) => {
                console.error(`Error updating link for ${link.id}:`, error);
                this.errorMessage = "Failed to update link. Please try again.";
                this.showErrorToast = true;
              });
          } else {
            return axios
              .post("http://197.134.253.234:9100/api/links/", link, { headers })
              .then(() => {
                console.log("New link added successfully.");
              })
              .catch((error) => {
                console.error("Error adding new link:", error);
                this.errorMessage = "Failed to add new link. Please try again.";
                this.showErrorToast = true;
              });
          }
        });

        Promise.all(updatePromises)
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
      } else {
        console.error("No token found. Please log in.");
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
