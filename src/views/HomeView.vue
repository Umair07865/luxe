<template>
  <div id="homePage">
    <navBarTopper />
    <navBar />
    <crousalAndCategories />
    <FlashSales />
    <FlashSalesSlider />
    <BrowseByCategories />
    <CategoriesSection />
    <BestSelling />
    <BestellingProducts />
    <bannerSection />
    <OurProducts />
    <ExploreProducts />
    <NewArrival />
    <NewArrivalSection />
    <whatsAppContainer />
    <allFeatures />
    <footerBar />
    <copyRight />
  </div>
</template>

<script>
import navBar from "../components/NavBar.vue";
import navBarTopper from "../components/NavBarTopper.vue";
import footerBar from "../components/Footer.vue";
import copyRight from "../components/CopyRight.vue";
import crousalAndCategories from "../components/HomeCrousalAndCategories.vue";
import FlashSales from "../components/FlashSales.vue";
import FlashSalesSlider from "../components/FlashSalesSlider.vue";
import BrowseByCategories from "../components/BrowseByCategories.vue";
import CategoriesSection from "../components/Categories.vue";
import BestSelling from "../components/BestSelling.vue";
import BestellingProducts from "../components/BestSellingProducts.vue";
import bannerSection from "../components/Banner.vue";
import OurProducts from "../components/OurProducts.vue";
import ExploreProducts from "../components/ExploreProducts.vue";
import NewArrival from "../components/NewArrival.vue";
import NewArrivalSection from "../components/NewArrivalBanner.vue";
import whatsAppContainer from "../components/WhatsAppBtn.vue";
import allFeatures from "../components/Features.vue";
export default {
  name: "HomePage",
  components: {
    navBar,
    navBarTopper,
    footerBar,
    copyRight,
    crousalAndCategories,
    FlashSales,
    FlashSalesSlider,
    BrowseByCategories,
    CategoriesSection,
    BestSelling,
    BestellingProducts,
    bannerSection,
    OurProducts,
    ExploreProducts,
    NewArrival,
    NewArrivalSection,
    whatsAppContainer,
    allFeatures,
  },
  mounted() {
    this.$store.commit("ACCOUNTS_CONTROLLER", true);
  },
};
</script>
