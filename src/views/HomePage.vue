<template>
    <div>
        <navbar-component></navbar-component>
        <header-component></header-component>
        <carousel-component></carousel-component>
        <slat-component></slat-component>
        <cards-component></cards-component>
        <store-component></store-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeaderComponent from "@/components/HomePage/HeaderComponent.vue";
import CarouselComponent from "@/components/HomePage/CarouselComponent.vue";
import SlatComponent from "@/components/HomePage/SlatComponent.vue";
import CardsComponent from "@/components/HomePage/CardsComponent.vue";
import StoreComponent from "@/components/HomePage/StoreComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
    name: "HomePage",
    components: {
        NavbarComponent,
        HeaderComponent,
        CarouselComponent,
        SlatComponent,
        CardsComponent,
        StoreComponent,
        FooterComponent,
    },
};
</script>
