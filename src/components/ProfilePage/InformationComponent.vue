<template>
  <div class="text-center">
    <div class="flex justify-center">
      <div class="relative">
        <div v-if="profile && profile.avatar" tabindex="0" role="button" class="w-40 circle avatar">
          <div class="rounded-full">
            <img :src="profile.avatar" alt="User Avatar" />
          </div>
        </div>

        <p v-else class="text-gray-500">No avatar available</p>
      </div>
    </div>
    <div v-if="profile" class="text-center mt-1">
      <h3 class="text-3xl font-semibold leading-normal text-blueGray-700">
        {{ profile.first_name }} {{ profile.last_name }}
      </h3>
      <div class="text-sm font-bold leading-normal mb-4 text-blueGray-700">
        @{{ profile.slug }}
      </div>
    </div>

    <div v-if="!profile" class="text-center text-red-500 mt-4">
      <p>Profile data could not be fetched. Please try again later.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationComponent",
  props: {
    profile: {
      type: Object,
      default: null,
    },
  },
};
</script>
