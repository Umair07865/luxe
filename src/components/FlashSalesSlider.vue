<template>
  <section id="flashSaleSliderSection">
    <div id="flashSalesSlider" ref="container">
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
            <div class="off-percentage">{{ flash.offPercentage }}</div>
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
  name: "FlashSalesSlider",
  data() {
    return {
      sliderWidth: 0,
      scrollPositions: "",
      flashSales: [
        {
          image: require("@/assets/shilajeet.avif"),
          offPercentage: "-30%",
          title: "Premium Himalayan Shilajit Extract",
          deducted_price: "PKR 3500",
          real_price: "PKR 5000",
          rating: "1.7",
          rated_people: "289",
        },
        {
          image: require("@/assets/shilajeet6.jpg"),
          offPercentage: "-25%",
          title: "Organic Shilajit Resin",
          deducted_price: "PKR 3750",
          real_price: "PKR 5000",
          rating: "4.8",
          rated_people: "325",
        },
        {
          image: require("@/assets/shilajeet5.webp"),
          offPercentage: "-20%",
          title: "Pure Altai Shilajit",
          deducted_price: "PKR 4000",
          real_price: "PKR 5000",
          rating: "4.6",
          rated_people: "347",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV9qFODsQ024fBDGIt40v8iolbxgl9rDEP0pUGP7ld5uZOJjuCtvWFliRWRS6hW-W1ItM&usqp=CAU",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfze_g2TdhYZjTBtvC2YlYZYqgaTIPMEBqWhHjnRf7nbbldtTWpmOpiPSjUVd2OkDmRm8&usqp=CAU",
          offPercentage: "-10%",
          title: "Premium Gold Grade Shilajit",
          deducted_price: "PKR 4500",
          real_price: "PKR 5000",
          rating: "4.9",
          rated_people: "398",
        },
        {
          image: "https://i.ebayimg.com/images/g/7aQAAOSwsv1kCNYA/s-l400.jpg",
          offPercentage: "-25%",
          title: "High Altitude Himalayan Shilajit",
          deducted_price: "PKR 3750",
          real_price: "PKR 5000",
          rating: "4.7",
          rated_people: "275",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-SgnkKlZ9LmCvylMnxAhqvOiF78QsyZV27RBiYrM3Yj5KQNQhJQAqoJHsXk1MBT4svQ&usqp=CAU",
          offPercentage: "-20%",
          title: "Premium Black Shilajit",
          deducted_price: "PKR 4000",
          real_price: "PKR 5000",
          rating: "4.6",
          rated_people: "312",
        },
        {
          image:
            "https://5.imimg.com/data5/SELLER/Default/2021/9/MT/GS/GU/22134664/raw-shilajit-stone.jpg",
          offPercentage: "-15%",
          title: "Authentic Altai Mumijo",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "389",
        },
        {
          image:
            "https://img.freepik.com/free-photo/abstract-formed-by-color-dissolving-water_1112-1924.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-5%",
          title: "Premium Shilajit Capsules",
          deducted_price: "PKR 4750",
          real_price: "PKR 5000",
          rating: "4.9",
          rated_people: "423",
        },
        {
          image:
            "https://svagrofood.com/wp-content/uploads/2019/10/15_Asphaltum-600x600.jpg",
          offPercentage: "-20%",
          title: "Premium Pure Shilajit Extract",
          deducted_price: "PKR 4000",
          real_price: "PKR 5000",
          rating: "4.8",
          rated_people: "334",
        },
        {
          image:
            "https://img.freepik.com/free-photo/abstract-formed-by-color-dissolving-water_1112-1894.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-15%",
          title: "Altai Gold Shilajit Resin",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.7",
          rated_people: "362",
        },
        {
          image:
            "https://img.freepik.com/premium-photo/black-brush-stroke-isolated-white-background-oil-paint-abstract-stroke-watercolor-brush-stroke-design-mockup_136401-4577.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-10%",
          title: "Premium Black Shilajit Paste",
          deducted_price: "PKR 4500",
          real_price: "PKR 5000",
          rating: "4.9",
          rated_people: "398",
        },
        {
          image:
            "https://img.freepik.com/premium-psd/black-color-splash-psd-white-background_889056-138696.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-5%",
          title: "Authentic Himalayan Shilajit Powder",
          deducted_price: "PKR 4750",
          real_price: "PKR 5000",
          rating: "4.6",
          rated_people: "411",
        },
        {
          image:
            "https://img.freepik.com/premium-photo/oil-blob-white-background_392895-213527.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-30%",
          title: "Pure Himalayan Shilajit Resin",
          deducted_price: "PKR 3500",
          real_price: "PKR 5000",
          rating: "4.8",
          rated_people: "385",
        },
        {
          image:
            "https://img.freepik.com/free-photo/abstract-formed-by-color-dissolving-water_1112-1931.jpg?uid=R106632644&ga=GA1.1.1818742476.1663832639&semt=ais_user",
          offPercentage: "-25%",
          title: "Premium Altai Shilajit Capsules",
          deducted_price: "PKR 3750",
          real_price: "PKR 5000",
          rating: "4.7",
          rated_people: "399",
        },
      ],
    };
  },
  methods: {
    scroller(newPosition) {
      const container = this.$refs.container;
      if (!container) {
        console.error("Scroll container reference is undefined");
        return;
      }
      const maxScroll = container.scrollWidth - container.clientWidth;
      const payload = {
        enableBtn: true,
        disableBtn: false,
      };
      this.$store.commit("BTN_CONTROLS", payload);
      if (container.scrollLeft === maxScroll) {
        console.log("Reached end of scroll");
        const payload = {
          enableBtn: false,
          disableBtn: true,
        };
        this.$store.commit("BTN_CONTROLS", payload);
      } else if (container.scrollLeft < 0) {
        console.log("Reached in start");
      }
      container.scrollLeft = newPosition;
    },
  },
  computed: {
    scrollLeftPositions() {
      return this.$store.getters.GET_SCROLL_LEFT_POSITION;
    },
  },
  watch: {
    scrollLeftPositions(newPosition) {
      this.scroller(newPosition);
    },
  },
};
</script>
<style scoped>
#flashSalesSlider {
  overflow: scroll;
  width: 100%;
  scroll-behavior: smooth;
}
.slider-controller {
  display: flex;
  padding: 2rem 5rem;
  gap: 1rem;
  height: 100%;
  width: fit-content;
}
.flash-sales-card-wrapper {
  width: 200px;
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

.flash-sales-card-wrapper .off-percentage {
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
}
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
#flashSaleSliderSection .btn-products {
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  background-color: #f44336;
  border-radius: 3px;
  margin: auto;
}
#flashSaleSliderSection .btn-products-wrapper {
  text-align: center;
  padding: 1rem;
}
@media (max-width: 1024px) {
  .slider-controller {
    padding: 2rem;
  }
}
@media (max-width: 768px) {
  .slider-controller {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  .slider-controller {
    padding: 2rem 1rem;
  }
}
</style>
