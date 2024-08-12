<template>
  <div id="ourStory">
    <v-row class="inner-wrapper">
      <v-col class="description" cols="12" md="6">
        <h1 class="mb-5">Our Story</h1>
        <span>
          Luxe is a premier e-commerce platform offering a curated selection of
          high-quality products for discerning customers. Specializing in luxury
          and premium goods, Luxe provides an unparalleled shopping experience
          with a focus on elegance, exclusivity, and excellence. From premium
          health supplements to sophisticated accessories and exclusive
          lifestyle items, every product is meticulously sourced to ensure the
          highest standards of quality and authenticity. <br /><br />
          Our user-friendly website is designed for a seamless and enjoyable
          shopping journey. With intuitive navigation, secure payment options,
          and prompt customer service, Luxe is committed to delivering an
          exceptional online experience. Explore Luxe today to discover luxury
          items that elevate your lifestyle and make every purchase a statement
          of elegance.
        </span>
      </v-col>
      <v-col class="banner-image" cols="12" md="6"></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ourStory",
};
</script>
<style scoped>
#ourStory .inner-wrapper {
  padding: 2rem 6rem;
  display: flex;
  margin: 0;
}
#ourStory .inner-wrapper h1 {
  letter-spacing: 5px;
  font-size: 2.5rem;
}
#ourStory .inner-wrapper > div {
  height: 500px;
}
#ourStory .inner-wrapper .banner-image {
  background-image: url("https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: contain;
}
@media (max-width: 1024px) {
  #ourStory .inner-wrapper {
    padding: 2rem 3rem;
  }
}
@media (max-width: 768px) {
  #ourStory .inner-wrapper .description {
    height: fit-content;
    padding: 0;
    text-align: justify;
  }
  #ourStory .inner-wrapper {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  #ourStory .inner-wrapper {
    padding: 1rem;
  }
}
</style>
