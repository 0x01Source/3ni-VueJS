<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-semibold mb-4">Account Settings</h2>
    <hr class="my-6 border-gray-300" />

    <div class="space-y-6">
      <div>
        <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password:</label>
        <input v-model="currentPassword" class="input-field" type="password" id="currentPassword"
          placeholder="Current Password" />
      </div>

      <div>
        <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password:</label>
        <input v-model="newPassword" class="input-field" type="password" id="newPassword" placeholder="New Password" />
      </div>

      <button @click="changePassword" class="btn-main mt-4">
        Save Changes
      </button>
    </div>

    <div v-if="showSuccessToast" id="toast-success"
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
      <button type="button" @click="showSuccessToast = false"
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
import { ref } from "vue";

export default {
  name: "AccountsettingsComponent",
  setup() {
    const currentPassword = ref("");
    const newPassword = ref("");
    const showSuccessToast = ref(false);
    const showErrorToast = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");

    const changePassword = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        await axios.post(
          "/auth/users/set_password/",
          {
            current_password: currentPassword.value,
            new_password: newPassword.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        successMessage.value = "Password changed successfully";
        showSuccessToast.value = true;
        setTimeout(() => (showSuccessToast.value = false), 5000);
        currentPassword.value = "";
        newPassword.value = "";
      } catch (error) {
        errorMessage.value =
          error.response?.data?.detail || "Failed to change password";
        showErrorToast.value = true;
        setTimeout(() => (showErrorToast.value = false), 5000);
      }
    };

    return {
      currentPassword,
      newPassword,
      changePassword,
      showSuccessToast,
      showErrorToast,
      successMessage,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 mt-1 rounded-3xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#dfa027] focus:ring-[#dfa027] focus:ring-1 transition-colors duration-300;
}

.btn-main {
  @apply w-full py-3 rounded-3xl bg-[#dfa027] text-white font-semibold transition-colors duration-300 hover:bg-[#ffc456];
}
</style>
