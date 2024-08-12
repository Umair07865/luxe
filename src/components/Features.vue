<template>
  <div id="allFeatures">
    <div class="innerWrapper">
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-truck-fast-outline</v-icon
        >
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free Delivery For All Order Over $140</p>
      </div>
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-headphones</v-icon
        >
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 Customer Support</p>
      </div>
      <div class="features">
        <v-icon :data-testid="'AutoAwesomeIcon'" class="feature-icons"
          >mdi-shield-check-outline</v-icon
        >
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We Return Money Within 30 Days</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "allFeatures",
};
</script>
<style scoped>
#allFeatures {
  padding: 2rem 5rem;
}
#allFeatures .innerWrapper {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-content: center;
}
.features {
  height: 250px;
  padding: 1rem;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.features .feature-icons {
  outline: 0.5rem solid rgb(192, 190, 190);
  border-radius: 50%;
  background-color: black;
  color: white;
  padding: 1rem;
}
@media (max-width: 1024px) {
  .features {
    width: 30%;
  }
}
@media (max-width: 425px) {
  #allFeatures .innerWrapper {
    flex-direction: column;
  }
  .features {
    width: 100%;
  }
  #allFeatures {
    padding: 1rem;
  }
}
</style>
>
