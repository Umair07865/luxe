<template>
  <div id="navBarTopper">
    <p>
      Summer Sale For All Swim Suit And Free Delivery - OFF - 50%
      <router-link to="#" class="links">ShopNow</router-link>
    </p>
    <div class="language-drawer">
      <v-select
        v-model="selectedLanguage"
        :items="['English', 'Urdu']"
        class="drop-down-manu text--light"
        dark
        outlined
        hide-details
      ></v-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBarTopper",
  data: () => ({
    selectedLanguage: "English",
  }),
};
</script>
<style scoped>
#navBarTopper {
  /* border: 1px solid black; */
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
}
#navBarTopper p {
  /* color: white; */
  text-align: center;
  margin: 0;
}
.links {
  color: white;
  font-weight: 600;
  margin-left: 1rem;
}
.language-drawer {
  position: absolute;
  right: 10rem;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  /* border: 1px solid orange; */
}
.drop-down-manu {
  height: 100%;
  width: 8rem;
  /* border: 1px solid black; */
}
@media (max-width: 1100px) {
  #navBarTopper {
    justify-content: space-evenly;
  }
  .language-drawer {
    position: unset;
  }
}
@media (max-width: 425px) {
  #navBarTopper {
    flex-direction: column-reverse;
    height: fit-content;
    align-items: inherit;
  }
  #navBarTopper p {
    text-align: initial;
    padding: 1rem;
  }
}
</style>
