<template>
  <div id="categories">
    <div class="categories-wrapper">
      <div class="category" v-for="(cat, key) in categories" :key="key">
        <!-- <v-icon class="category-images">mdi-cellphone</v-icon> -->
        <img :src="cat.img" class="category-images" alt="loading" />
        <v-text class="mt-5 cateegory-name">{{ cat.name }}</v-text>
      </div>
    </div>
    <v-divider horizontal class="my-2"></v-divider>
  </div>
</template>
<script>
export default {
  name: "CategoriesSection",
  data() {
    return {
      categories: [
        {
          img: require("@/assets/cellPhone.svg"),
          name: "Phones",
        },
        {
          img: require("@/assets/computer.svg"),
          name: "Computers",
        },
        {
          img: require("@/assets/smartwatch.svg"),
          name: "Smart Watch",
        },
        {
          img: require("@/assets/camera.svg"),
          name: "Camera",
        },
        {
          img: require("@/assets/headphones.svg"),
          name: "HeadPhones",
        },
        {
          img: require("@/assets/gammingtriggers.svg"),
          name: "Gamming",
        },
      ],
    };
  },
};
</script>
<style scoped>
#categories .categories-wrapper {
  /* border: 1px solid black; */
  height: 250px;
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#categories .categories-wrapper .category {
  border: 1px solid rgb(185, 185, 185);
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#categories .categories-wrapper .category .category-images {
  height: 4rem;
}
.category .category-images .cateegory-name {
  font-size: large;
}
@media (max-width: 768px) {
  #categories .categories-wrapper {
    padding: 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 10rem);
    height: fit-content;
  }
  #categories .categories-wrapper .category {
    width: 100%;
  }
}
@media (max-width: 425px) {
  #categories .categories-wrapper {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 10rem);
    /* height: fit-content; */
  }
  #categories .categories-wrapper .category {
    width: 100%;
  }
}
</style>
