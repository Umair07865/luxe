<template>
  <section id="BestellingProductsSection">
    <div id="BestellingProducts" ref="container">
      <div class="slider-controller">
        <div
          class="flash-sales-card-wrapper"
          v-for="(flash, key) in flashSales"
          :key="key"
        >
          <div
            class="flash-sales-image"
            :style="{ backgroundImage: 'url(' + flash.image + ')' }"
          >
            <!-- <div class="off-percentage">{{ flash.offPercentage }}</div> -->
            <div class="like-or-view-icons">
              <v-icon color="black" class="cards-icons"
                >mdi-heart-outline</v-icon
              >
              <v-icon color="black" class="cards-icons">mdi-eye-outline</v-icon>
            </div>
            <button class="add-to-cart">Add To Cart</button>
          </div>
          <div class="card-title card-details">{{ flash.title }}</div>
          <div class="price card-details">
            {{ flash.deducted_price }} <span> {{ flash.real_price }} </span>
          </div>
          <v-card-text class="taken-rating">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="parseFloat(flash.rating)"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{ flash.rating }} ({{ flash.rated_people }})
              </div>
            </v-row>
          </v-card-text>
        </div>
      </div>
    </div>
    <div class="btn-products-wrapper">
      <button class="btn-products">View All Products</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "BestellingProducts",
  data() {
    return {
      sliderWidth: 0,
      scrollPositions: "",
      flashSales: [
        {
          image:
            "https://www.theauric.com/cdn/shop/articles/Shilajit_3cab5e3b-a2d5-434a-b88a-75928e0383ac_1800x.jpg?v=1659957524",
          offPercentage: "-10%",
          title: "Premium Black Shilajit Paste",
          deducted_price: "PKR 4500",
          real_price: "PKR 5000",
          rating: "4.9",
          rated_people: "398",
        },
        {
          image: "https://i.ebayimg.com/images/g/7aQAAOSwsv1kCNYA/s-l400.jpg",
          offPercentage: "-5%",
          title: "Authentic Himalayan Shilajit Powder",
          deducted_price: "PKR 4750",
          real_price: "PKR 5000",
          rating: "4.6",
          rated_people: "411",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-SgnkKlZ9LmCvylMnxAhqvOiF78QsyZV27RBiYrM3Yj5KQNQhJQAqoJHsXk1MBT4svQ&usqp=CAU",
          offPercentage: "-30%",
          title: "Pure Himalayan Shilajit Resin",
          deducted_price: "PKR 3500",
          real_price: "PKR 5000",
          rating: "4.8",
          rated_people: "385",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKr1wPY7qXq1typn7nWPEgR16vTP59QMe9Cg&s",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
      ],
    };
  },
};
</script>
<style scoped>
.slider-controller {
  display: flex;
  padding: 2rem 5rem;
  gap: 1rem;
  height: 100%;
  width: 100%;
}
.flash-sales-card-wrapper {
  width: 25%;
  height: 300px;
}
.flash-sales-image {
  width: 100%;
  height: 70%;
  background-size: contain;
  background-position: center;
  border: 1px solid rgb(187, 187, 187);
  position: relative;
  border-radius: 3px;
  transition: ease 0.5s;
}
.flash-sales-card-wrapper .add-to-cart {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  width: 100%;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  height: 0;
  transition: ease 0.5s;
  z-index: -1;
}
.flash-sales-image:hover .add-to-cart {
  z-index: 0;
  padding: 5px;
  height: 2.5rem;
}

/* .flash-sales-card-wrapper .off-percentage {
  border: 1px solid #f44336;
  color: white;
  background-color: #f44336;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  border-radius: 5px;
  padding: 2px 13px;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: ease 0.5s;
}
.flash-sales-card-wrapper .off-percentage:hover {
  transform: scale(1.1);
} */
.flash-sales-card-wrapper .like-or-view-icons {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 3px;
  position: absolute;
  right: 3px;
  top: 3px;
}
.flash-sales-card-wrapper .like-or-view-icons .cards-icons {
  font-size: 1.2rem;
  border-radius: 50%;
  background-color: white;
  padding: 2px;
  transition: ease 0.5s;
}
.flash-sales-card-wrapper .like-or-view-icons .cards-icons:hover {
  color: #f44336 !important;
  transform: scale(1.1);
}
.flash-sales-card-wrapper .card-details {
  font-size: 12px;
  padding: 5px 0;
  font-weight: bold;
}
.flash-sales-card-wrapper .price {
  color: #f44336;
  display: flex;
  justify-content: space-between;
}
.flash-sales-card-wrapper .price span {
  color: grey;
  text-decoration: line-through;
}
.flash-sales-card-wrapper .taken-rating {
  padding: 1rem 0 !important;
}
#BestellingProductsSection .btn-products {
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  background-color: #f44336;
  border-radius: 3px;
  margin: auto;
}
#BestellingProductsSection .btn-products-wrapper {
  text-align: center;
  padding: 1rem;
}
@media (max-width: 1024px) {
  #BestellingProductsSection .slider-controller {
    padding: 2rem;
  }
}
@media (max-width: 768px) {
  #BestellingProductsSection .slider-controller {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-template-rows: repeat(2, 20rem);
    /* height: fit-content; */
  }
  #BestellingProductsSection .flash-sales-card-wrapper {
    width: 100%;
  }
}
@media (max-width: 425px) {
  #BestellingProductsSection .slider-controller {
    padding: 2rem 1rem;
    grid-template-columns: repeat(2, calc(50% - 0.5rem));
    grid-template-rows: repeat(2, 20rem);
  }
}
</style>
