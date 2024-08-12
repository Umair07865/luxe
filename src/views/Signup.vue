<template>
  <div id="login">
    <navBarTopper />
    <navBar />
    <!-- <h1>login page</h1> -->
    <div class="login-outer-container d-flex">
      <div class="login-image-section"></div>
      <div class="form-section">
        <FormsInput />
      </div>
    </div>
    <footerBar />
    <copyRight />
  </div>
</template>
<script>
import navBar from "../components/NavBar.vue";
import navBarTopper from "../components/NavBarTopper.vue";
import FormsInput from "../components/FormSignup.vue";
import footerBar from "../components/Footer.vue";
import copyRight from "../components/CopyRight.vue";
export default {
  name: "SignupPage",
  components: {
    navBar,
    navBarTopper,
    FormsInput,
    footerBar,
    copyRight,
  },
  mounted() {
    this.$store.commit("ACCOUNTS_CONTROLLER", false);
  },
};
</script>
<style scoped>
body {
  overflow: hidden;
}
.login-outer-container {
  /* border: 1px solid black; */
  height: calc(100vh - 117px);
  align-items: center;
}
.login-image-section {
  /* border: 1px solid black; */
  width: 50%;
  background-image: url("../assets/loginImage.png");
  background-size: contain;
  height: 70vh;
  background-color: rgb(207, 228, 232);
  background-blend-mode: darken;
}
.form-section {
  width: 50%;
  /* border: 1px solid black; */
  height: 70vh;
}
@media (max-width: 768px) {
  .login-image-section {
    display: none;
  }
  .form-section {
    width: 100%;
    /* height: calc(100vh - 102px); */
  }
}
@media (max-width: 425px) {
  .login-outer-container {
    height: calc(100vh - 188px);
  }
}
</style>
