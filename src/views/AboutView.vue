<template>
  <div id="aboutUs">
    <navBar />
    <navBarTopper />
    <div class="page-navigator">
      <router-link to="/" class="links">Home</router-link> /
      <router-link to="contact" class="links black--text">about</router-link>
    </div>
    <ourStory />
    <BiographyComp />
    <myTeam />
    <allFeatures />
    <footerBar />
  </div>
</template>
<script>
import navBar from "../components/NavBar.vue";
import navBarTopper from "../components/NavBarTopper.vue";
import footerBar from "../components/Footer.vue";
import ourStory from "../components/OurStorySection.vue";
import BiographyComp from "../components/Biography.vue";
import myTeam from "../components/OurTeam.vue";
import allFeatures from "../components/Features.vue";

export default {
  name: "aboutUs",
  components: {
    navBar,
    navBarTopper,
    footerBar,
    ourStory,
    BiographyComp,
    myTeam,
    allFeatures,
  },
  mounted() {
    this.$store.commit("ACCOUNTS_CONTROLLER", true);
  },
};
</script>
<style scoped>
.page-navigator {
  display: flex;
  gap: 2rem;
  padding: 1rem 8rem;
}
.page-navigator .links {
  color: rgb(188, 188, 188);
  text-decoration: none;
}
</style>
