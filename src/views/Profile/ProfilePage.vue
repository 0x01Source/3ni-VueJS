<template>
  <div class="relative min-h-screen bg-cover bg-center" :style="{
    backgroundImage: `url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D')`,
  }">
    <section class="relative py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col min-w-0 break-words w-full mb-6 rounded-3xl">
          <div class="px-6 py-4 mx-auto">
            <information-component :profile="profile"></information-component>
            <social-component :profile="profile"></social-component>
            <links-component :profile="profile"></links-component>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import InformationComponent from "@/components/ProfilePage/InformationComponent.vue";
import SocialComponent from "@/components/ProfilePage/SocialComponent.vue";
import LinksComponent from "@/components/ProfilePage/LinksComponent.vue";

export default {
  components: {
    InformationComponent,
    SocialComponent,
    LinksComponent,
  },
  data() {
    return {
      profile: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `/api/profiles/${this.$route.params.username}/`
      );
      this.profile = response.data;
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      this.profile = null;
    }
  },
};
</script>
