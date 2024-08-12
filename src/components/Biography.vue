<template>
  <div id="Biography">
    <div class="innerWrapper">
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-store</v-icon
        >
        <h1 class="mt-4">10.5k</h1>
        <p>Sellers active our site</p>
      </div>
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-currency-usd</v-icon
        >
        <h1 class="mt-4">33k</h1>
        <p>Monthly product sale</p>
      </div>
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-shopping</v-icon
        >
        <h1 class="mt-4">45.5k</h1>
        <p>Customer active in our site</p>
      </div>
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-cash-multiple</v-icon
        >
        <h1 class="mt-4">25k</h1>
        <p>Anual gross sale in our site</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BiographyComp",
};
</script>
<style scoped>
#Biography .innerWrapper {
  display: flex;
  gap: 1rem;
  padding: 2rem 5rem;
  justify-content: space-between;
  align-content: center;
}
#Biography .features {
  height: 200px;
  padding: 1rem;
  width: 20%;
  border: 1px solid rgb(120, 120, 120);
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: ease 0.5s;
}
#Biography .features:hover {
  background-color: #f44336;
  color: white;
  border: none;
}
#Biography .features:hover .feature-icons {
  color: black;
  background-color: white;
}
#Biography .features .feature-icons {
  outline: 0.5rem solid rgb(192, 190, 190);
  border-radius: 50%;
  background-color: black;
  color: white;
  font-size: 2rem;
  padding: 1rem;
}
@media (max-width: 1024px) {
  #Biography .features {
    width: unset;
  }
  #Biography .innerWrapper {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 15rem);
    height: fit-content;
    padding: 2rem 3rem;
  }
}
@media (max-width: 768px) {
  #Biography .innerWrapper {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  #Biography .innerWrapper {
    flex-direction: column;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, 15rem);
    padding: 1rem;
  }
  #Biography .features {
    width: 100%;
  }
}
</style>
>
