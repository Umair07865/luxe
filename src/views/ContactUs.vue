<template>
  <div id="contactUs">
    <navBarTopper />
    <navBar />
    <div class="page-navigator">
      <router-link to="/" class="links">Home</router-link> /
      <router-link to="contact" class="links black--text">contact</router-link>
    </div>
    <contactUsForm />
    <footerBar />
  </div>
</template>
<script>
import navBar from "../components/NavBar.vue";
import navBarTopper from "../components/NavBarTopper.vue";
import contactUsForm from "../components/ContactUsForm.vue";
import footerBar from "../components/Footer.vue";

export default {
  name: "contactUs",
  components: { navBar, navBarTopper, contactUsForm, footerBar },
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
