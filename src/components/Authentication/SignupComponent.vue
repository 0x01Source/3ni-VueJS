<template>
    <div class="min-h-screen bg-slate-500 text-black flex justify-center px-4 py-10 fade-in">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow rounded-3xl sm:rounded-3xl flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div>
                    <img src="../../assets/logo.png" class="w-20 mx-auto" alt="Logo" />
                </div>
                <div class="mt-12 flex flex-col items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                    <div class="w-full flex-1 mt-8">
                        <div class="flex flex-col items-center">
                            <button
                                class="w-full max-w-xs font-bold shadow-sm rounded-3xl py-3 bg-slate-200 hover:opacity-80 text-black flex items-center justify-center transition-opacity duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500">
                                <div class="bg-white p-2 rounded-full">
                                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4" />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853" />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04" />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335" />
                                    </svg>
                                </div>
                                <span class="ml-4"> Sign Up with Google </span>
                            </button>
                        </div>

                        <div class="my-12 border-b text-center">
                            <div
                                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Or sign up with e-mail
                            </div>
                        </div>

                        <div class="mx-auto max-w-xs">
                            <form @submit.prevent="submitForm">
                                <input v-model="username"
                                    class="w-full px-8 py-4 mb-5 rounded-3xl font-medium bg-gray-100 border border-slate-500 placeholder-gray-500 text-sm focus:outline-none focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-500 transition-all duration-300"
                                    type="text" placeholder="User Name" />
                                <input v-model="email"
                                    class="w-full px-8 py-4 rounded-3xl font-medium bg-gray-100 border border-slate-500 placeholder-gray-500 text-sm focus:outline-none focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-500 transition-all duration-300"
                                    type="email" placeholder="Email" />
                                <input v-model="password"
                                    class="w-full px-8 py-4 rounded-3xl font-medium bg-gray-100 border border-slate-500 placeholder-gray-500 text-sm focus:outline-none focus:border-slate-500 focus:bg-white mt-5 focus:ring-2 focus:ring-slate-500 transition-all duration-300"
                                    type="password" placeholder="Password" />
                                <input v-model="re_password"
                                    class="w-full px-8 py-4 rounded-3xl font-medium bg-gray-100 border border-slate-500 placeholder-gray-500 text-sm focus:outline-none focus:border-slate-500 focus:bg-white mt-5 focus:ring-2 focus:ring-slate-500 transition-all duration-300"
                                    type="password" placeholder="Confirm Password" />
                                <button
                                    class="mt-5 tracking-wide font-semibold bg-slate-500 text-gray-100 w-full py-4 rounded-3xl hover:opacity-80 transition-opacity duration-300 ease-in-out flex items-center justify-center focus:ring-2 focus:ring-slate-500">
                                    <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3"> Sign Up </span>
                                </button>
                                <p v-if="showCheckboxError" class="mt-2 text-sm text-red-500 text-center">
                                    You must agree to the terms and conditions.
                                </p>
                            </form>

                            <p class="mt-6 text-xs text-gray-600 text-center">
                                <input id="default-checkbox" type="checkbox" v-model="checkboxChecked"
                                    class="w-4 h-4 mr-2 text-slate-500 bg-gray-100 border-gray-300 rounded focus:ring-slate-500 focus:ring-2" />
                                I agree to abide by templatana's
                                <a href="#" class="border-b border-gray-500 border-dotted">
                                    Terms of Service
                                </a>
                                and its
                                <a href="#" class="border-b border-gray-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                            <div class="mx-auto justify-center flex py-4 text-sm underline">
                                <router-link to="/login"><a>I Already have Account .. Login</a></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="flex-1 bg-slate-200 rounded-r-3xl text-center hidden lg:flex items-center justify-center slide-in-right">
                <div class="w-3/4 h-3/4 flex items-center justify-center">
                    <img class="" src="../../assets/signup.png" alt="Sign Up" />
                </div>
            </div>
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
            <div class="ms-3 text-sm font-normal">Sign up successful!</div>
            <button type="button" @click="showToast = false"
                class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>

        <div v-if="showErrorToast" id="toast-danger"
            class="fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-3xl shadow"
            role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
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
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
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
    name: "SignupComponent",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            re_password: "",
            checkboxChecked: false, 
            showToast: false,
            showErrorToast: false,
            errorMessage: "", 
        };
    },
    methods: {
        async submitForm() {
            if (this.password !== this.re_password) {
                this.showErrorToast = true;
                this.errorMessage = "Passwords do not match!";
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 6000);
                return;
            }

            if (!this.checkboxChecked) {
                this.errorMessage = "You must agree to the terms and conditions.";
                this.showErrorToast = true;
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 6000);
                return;
            }

            try {
                const response = await axios.post("/auth/users/", {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                });
                console.log(response.data);
                this.showToast = true;
                setTimeout(() => {
                    this.showToast = false;
                }, 5000);
                this.$router.push("/login");
            } catch (error) {
                console.error("There was an error!", error);
                this.showErrorToast = true;
                this.errorMessage = "Signup failed. Please try again.";
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 6000);
            }
        },
    },
};
</script>
