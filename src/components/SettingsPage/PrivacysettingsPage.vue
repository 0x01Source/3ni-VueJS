<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-semibold mb-4">Privacy Settings</h2>
    <hr class="my-6 border-gray-300" />

    <div class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700">Your Profile:</label>
        <ul class="flex space-x-4">
          <li>
            <input type="radio" id="public" name="profile" value="public" class="hidden peer" />
            <label for="public" class="post-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-user-group mr-1"></i>
              <div class="text-lg font-semibold">Public</div>
            </label>
          </li>
          <li>
            <input type="radio" id="private" name="profile" value="private" class="hidden peer" />
            <label for="private" class="post-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-user-lock mr-1"></i>
              <div class="text-lg font-semibold">Private</div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">How can see your Posts:</label>
        <ul class="flex space-x-4">
          <li>
            <input type="radio" id="everyone" name="post" value="everyone" class="hidden peer" />
            <label for="everyone" class="post-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-users mr-1"></i>
              <div class="text-lg font-semibold">Everyone</div>
            </label>
          </li>
          <li>
            <input type="radio" id="followers" name="post" value="followers" class="hidden peer" />
            <label for="followers" class="post-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-user-group mr-1"></i>
              <div class="text-lg font-semibold">Followes</div>
            </label>
          </li>
          <li>
            <input type="radio" id="only" name="post" value="only" class="hidden peer" />
            <label for="only" class="post-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-user-large mr-1"></i>
              <div class="text-lg font-semibold">Only me</div>
            </label>
          </li>
        </ul>
      </div>

      <button class="btn-main mt-4">Save Changes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacysettingsComponent",
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 mt-1 rounded-3xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#dfa027] focus:ring-[#dfa027] focus:ring-1 transition-colors duration-300;
}

.profile-option {
  @apply flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-colors duration-300;
}

.post-option {
  @apply flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-colors duration-300;
}

.btn-main {
  @apply w-full py-3 rounded-3xl bg-[#dfa027] text-white font-semibold transition-colors duration-300 hover:bg-[#ffc456];
}
</style>
