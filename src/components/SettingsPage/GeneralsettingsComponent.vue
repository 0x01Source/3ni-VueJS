<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-semibold mb-4">General Settings</h2>
    <hr class="my-6 border-gray-300" />

    <div class="space-y-6">
      <div>
        <label for="language" class="block text-sm font-medium text-gray-700">Language:</label>
        <select id="language" class="input-field">
          <option value="US">English US</option>
          <option value="CA">English UK</option>
          <option value="FR">Arabic</option>
          <option value="DE">Fancies</option>
        </select>
      </div>

      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Country:</label>
        <select id="country" class="input-field">
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div>
        <label for="birthdate" class="block text-sm font-medium text-gray-700">Birth Date:</label>
        <input id="birthdate" type="date" class="input-field" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Gender:</label>
        <ul class="flex space-x-4">
          <li>
            <input type="radio" id="male" name="gender" value="male" class="hidden peer" />
            <label for="male" class="gender-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-person fa-xl mr-1"></i>
              <div class="text-lg font-semibold">Male</div>
            </label>
          </li>
          <li>
            <input type="radio" id="female" name="gender" value="female" class="hidden peer" />
            <label for="female" class="gender-option peer-checked:bg-[#dfa027] peer-checked:text-white">
              <i class="fa-solid fa-person-dress fa-xl mr-1"></i>
              <div class="text-lg font-semibold">Female</div>
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
  name: "GeneralsettingsComponent",
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 mt-1 rounded-3xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#dfa027] focus:ring-[#dfa027] focus:ring-1 transition-colors duration-300;
}

.gender-option {
  @apply flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-colors duration-300;
}

.btn-main {
  @apply w-full py-3 rounded-3xl bg-[#dfa027] text-white font-semibold transition-colors duration-300 hover:bg-[#ffc456];
}
</style>
