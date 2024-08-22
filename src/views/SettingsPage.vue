<template>
    <div class="min-h-screen bg-gray-50 p-6">
        <div class="container mx-auto max-w-4xl bg-white rounded-3xl shadow-lg p-6">
            <div class="flex items-center justify-between mb-6">
                <img src="../assets/logo.png" alt="Logo" class="w-16" />
                <div class="flex space-x-4">
                    <router-link to="/">
                        <button class="btn-main">Back to Home</button>
                    </router-link>
                </div>
            </div>

            <div class="border-b border-gray-200 mb-6">
                <div class="flex space-x-4">
                    <button @click="currentTab = 'general'" :class="{ 'tab-active': currentTab === 'general' }"
                        class="tab-button">
                        General
                    </button>
                    <button @click="currentTab = 'password'" :class="{ 'tab-active': currentTab === 'password' }"
                        class="tab-button">
                        Password
                    </button>
                    <button @click="currentTab = 'privacy'" :class="{ 'tab-active': currentTab === 'privacy' }"
                        class="tab-button">
                        Privacy
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
import GeneralsettingsComponent from "@/components/SettingsPage/GeneralsettingsComponent.vue";
import AccounsettingsComponent from "@/components/SettingsPage/AccounsettingsComponent.vue";
import PrivacysettingsPage from "@/components/SettingsPage/PrivacysettingsPage.vue";

export default {
    name: "SettingsPage",
    components: {
        GeneralsettingsComponent,
        AccounsettingsComponent,
        PrivacysettingsPage,
    },
    data() {
        return {
            currentTab: "general",
        };
    },
    computed: {
        currentComponent() {
            switch (this.currentTab) {
                case "password":
                    return AccounsettingsComponent;
                case "privacy":
                    return PrivacysettingsPage;
                case "general":
                default:
                    return GeneralsettingsComponent;
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
