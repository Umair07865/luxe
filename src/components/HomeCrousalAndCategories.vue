<template>
  <section id="crousalAndCetegories">
    <v-row class="d-flex">
      <v-col cols="12" md="3" class="products-categories">
        <div class="products-list-wrapper">
          <ul>
            <li>Womens Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
      </v-col>
      <v-divider vertical class="devider-verticle"></v-divider>
      <v-col cols="12" md="7" class="product-crousal-wrapper">
        <center>
          <h1 class="top-heading-crousal">
            {{ animatedHeading }}
          </h1>
        </center>
        <div class="products-carousel">
          <template>
            <v-carousel class="full-height-carousel" hide-delimiters cycle>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                contain
              ></v-carousel-item>
            </v-carousel>
          </template>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "crousalAndCategories",
  data() {
    return {
      items: [
        {
          src: "https://www.purehimalayanshilajit.com/wp-content/uploads/2019/03/image22-1024x661-1.jpg",
        },
        {
          src: "https://img.freepik.com/free-photo/rocky-snowy-mountains_181624-405.jpg?t=st=1722328222~exp=1722331822~hmac=dec167665856d64e93a9a4a3d0b988642caad406533336285eae9d81d5897b28&w=2000",
        },
        {
          src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436489881/RK/JV/IP/143042991/shilajit-powder.jpg",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFqsZzo3YSFPuPzBmnn2sgEzK42WicpiMLA&s",
        },
      ],
      fullHeading: "Northern Shilajit Source: Pure and Potent",
      animatedHeading: "",
      index: 0,
    };
  },
  mounted() {
    this.type();
  },
  methods: {
    type() {
      if (this.index < this.fullHeading.length) {
        this.animatedHeading += this.fullHeading.charAt(this.index);
        this.index++;
        setTimeout(this.type, 100);
      } else {
        setTimeout(() => {
          this.index = 0;
          this.animatedHeading = "";
          this.type();
        }, 2000); // Wait 2 seconds before restarting
      }
    },
  },
};
</script>

<style>
#crousalAndCetegories {
  border: 1px solid rgb(222, 222, 222);
  padding: 1rem;
  display: flex;
  height: fit-content;
}
.products-categories {
  /* border: 1px solid orange; */
  overflow: scroll;
  /* height: calc(400px - 1rem); */
  padding: 2rem;
}
.top-heading-crousal {
  background: linear-gradient(to right, black, #f44336, gray, #f44336, #f44336);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* font-size: 48px; */
  font-weight: bold;
  animation: typing 4s steps(40, end), blink-caret 0.75s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

.devider-horizontal {
  display: none;
}
.products-categories ul {
  list-style: none;
  padding: 0;
}
.products-categories ul li {
  margin-bottom: 1rem;
  padding-left: calc(119px - 32px);
}
.products-carousel {
  height: 100%;
  width: 100%;
}
.full-height-carousel {
  height: 100% !important;
}
.product-crousal-wrapper {
  height: calc(400px - 1rem);
  width: 80%;
  margin: auto;
}
.v-responsive__content {
  width: 100% !important;
}

.v-window__prev,
.v-window__next {
  background: rgb(255 0 0 / 30%);
}
.v-btn__content,
.v-icon::after {
  color: red;
}
@media (max-width: 1024px) {
  .products-categories ul li {
    padding-left: 8px;
  }
}
@media (max-width: 768px) {
  .devider-verticle {
    display: none;
  }
  .products-categories {
    height: fit-content;
    /* padding: 2rem; */
  }
  .products-categories ul {
    display: flex;
  }
  #crousalAndCetegories {
    display: flex;
    height: fit-content;
    flex-direction: column;
  }
  .product-crousal-wrapper {
    padding: 2rem;
  }
  .products-categories ul li {
    padding-left: 0;
    width: 8rem;
  }
  .products-categories ul {
    width: max-content;
    display: flex;
    gap: 2rem;
  }
  .products-list-wrapper {
    /* border: 1px solid black; */
    overflow: scroll;
    position: relative;
  }
  .products-list-wrapper ul li::after {
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
  .products-list-wrapper ul li:hover::after {
    content: "";
    border: 1px solid rgb(0, 0, 0);
    width: 8rem;
  }
}
@media (max-width: 425px) {
  .products-categories {
    padding: 1rem;
  }
  .product-crousal-wrapper {
    padding: 1rem;
  }
}
</style>
