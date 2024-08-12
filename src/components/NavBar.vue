<template>
  <nav id="navBar">
    <div class="navbar-wrapper">
      <div class="nav-bar-header">
        <h1>
          LU<em>
            <font-awesome-icon
              :icon="['fas', 'cart-shopping']"
              class="luxe-logo"
            /><span style="color: #f44336">XE</span></em
          >
        </h1>
        <!-- <img src="../assets/logonew.png" alt="logo" class="header-logo" /> -->
      </div>
      <div class="nav-bar-drawer">
        <font-awesome-icon :icon="['fas', 'bars']" class="burger-btn" />
      </div>
      <div class="nav-bar-collapse-wrapper">
        <ul>
          <router-link to="/" class="links">
            <li>Home</li>
          </router-link>
          <router-link to="/contact" class="links">
            <li>Contact</li>
          </router-link>
          <router-link to="/about" class="links">
            <li>About</li>
          </router-link>

          <router-link to="/signup" class="links">
            <li>SignUp</li>
          </router-link>
        </ul>
        <div class="search-bar-side">
          <div class="input-search-bar-wrapper">
            <input
              type="search"
              name="searchbar"
              id="navSearchBar"
              class="nav-search-bar"
              placeholder="What you are looking for?"
            />
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="search-icon"
            />
          </div>
          <div class="notification-and-accounts" v-if="navController">
            <v-icon color="black">mdi-heart-outline</v-icon>
            <v-badge color="error" content="2">
              <v-icon color="black">mdi-cart-outline</v-icon>
            </v-badge>
            <v-icon class="user-profile bg-error">mdi-account-outline</v-icon>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navBar",
  computed: {
    navController() {
      return this.$store.getters.ACCOUNTS_GETTER;
    },
  },
};
</script>
<style scoped>
#navBar {
  border-bottom: 1px solid rgb(198, 198, 198);
  height: fit-content;
  width: 100%;
  background-color: white;
  color: rgb(0, 0, 0);
}

.navbar-wrapper {
  width: 85%;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
}
.nav-bar-header {
  /* border: 1px solid white; */
  width: 33%;
  text-align: left;
  height: 100%;
}
.luxe-logo {
  color: rgb(196, 192, 192);
}
#navBar ul {
  list-style: none;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: fit-content;
  margin: 0;
  font-size: large;
  position: relative;
}
#navBar ul li {
  cursor: pointer;
}
#navBar ul li::after {
  border: 1px solid white;
  position: absolute;
  z-index: 100;
  content: "";
  width: 0;
  cursor: pointer; /* Add pointer cursor on hover */
  display: flex;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  transition-property: all;
}
#navBar ul li:hover::after {
  content: "";
  border: 1px solid rgb(0, 0, 0);
  width: 4rem;
}
.search-bar-side {
  /* width: 33%; */
  display: flex;
  justify-content: right;
  padding: 0 2rem;
  /* position: relative; */
}
.nav-search-bar {
  background-color: rgb(245, 245, 245);
  padding: 1rem;
  height: 100%;
  border-radius: 5px;
  width: 15rem;
  border: none;
}
.input-search-bar-wrapper {
  position: relative;
}
.search-icon {
  position: absolute;
  right: 1rem;
  top: calc(50% - 8px);
  color: black !important;
}
.header-logo {
  height: 30px;
  width: 30px;
}
.header-logo h1 {
  margin: 0;
}
.nav-bar-collapse-wrapper {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.burger-btn {
  display: none;
}
.links {
  text-decoration: none;
  color: black;
}
.notification-and-accounts {
  /* border: 1px solid black; */
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;
  /* padding: 1rem; */
}
.user-profile {
  background-color: #f44336;
  color: white;
  border-radius: 50%;
  padding: 0.2rem;
}
@media (max-width: 1024px) {
  .nav-bar-collapse-wrapper {
    width: calc(100% - 62px);
  }
  .navbar-wrapper {
    width: 100%;
    padding: 1rem 2rem;
  }
  .nav-bar-header {
    width: 20%;
  }
}
@media (max-width: 786px) {
  .nav-bar-collapse-wrapper {
    display: none;
  }
  .navbar-wrapper {
    width: unset;
  }
  .burger-btn {
    display: block;
  }
  .nav-bar-header {
    width: 30%;
  }
}
@media (max-width: 425px) {
  .navbar-wrapper {
    padding: 1rem;
  }
}
</style>
