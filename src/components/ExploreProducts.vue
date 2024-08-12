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
  name: "ExploreProducts",
  data() {
    return {
      sliderWidth: 0,
      scrollPositions: "",
      flashSales: [
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
            "https://venomshilajit.com/wp-content/uploads/2024/05/Raw-Shilajit-Liquid-Venom.webp",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://5.imimg.com/data5/IY/VK/BW/SELLER-87336062/natural-shilajit-stone-500x500.jpg",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://images.onlymyhealth.com/imported/images/2023/June/08_Jun_2023/Main-shilajit.jpg",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
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
            "https://image.myupchar.com/55/webp/shilajit-ke-fayde-in-hindi-2.webp",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRnaCLAWB9bfv4o89EM40IXL8eTFnSEtmkHKxJXAuOqBzMT8ozhhPv31nyVCSHdUmjN8&usqp=CAU",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://cdn03.plentymarkets.com/5mbkw6rjiw8w/item/images/1083/full/1083-Mumijo-Shilajit-_2.jpg",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://superfoodsaustralia.com.au/cdn/shop/articles/SHILAJIT-2_1100x.png?v=1654584074",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://i0.wp.com/gbtradekey.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-03-at-12.43.19-1.jpeg?fit=960%2C1280&ssl=1",
          offPercentage: "-15%",
          title: "Authentic Himalayan Shilajit Paste",
          deducted_price: "PKR 4250",
          real_price: "PKR 5000",
          rating: "4.5",
          rated_people: "412",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/I/81PtAAqnTeL._AC_UL600_SR600,600_.jpg",
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
  display: grid;
  grid-template-columns: repeat(4, calc(35% - 10.2rem));
  grid-template-rows: repeat(3, fit-content);
  padding: 2rem 5rem;
  gap: 1rem;
  /* border: 1px solid black; */
  height: 100%;
  width: 100%;
}
.flash-sales-card-wrapper {
  /* width: 25%; */
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
