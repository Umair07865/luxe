<template>
  <div class="" id="whatsAppContainer">
    <div class="content-detail">
      <v-icon :data-testid="'AutoAwesomeIcon'" class="whatsapp-all-icons"
        >mdi-creation</v-icon
      ><span>Chat with Us!</span>
    </div>
    <div class="content-detail">
      <v-icon :data-testid="'AutoAwesomeIcon'" class="whatsapp-all-icons"
        >mdi-creation</v-icon
      ><span>Feel free to tweak this text</span>
    </div>
    <v-icon :data-testid="'mdi-Whatsapp'" class="whatsapp-icons"
      >mdi-whatsapp</v-icon
    >
  </div>
</template>
<script>
export default {
  name: "whatsAppContainer",
};
</script>

<style scoped>
#whatsAppContainer {
  position: fixed;
  right: 0;
  /* background-color: orange; */
  z-index: 3;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: end;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 15px;
}
#whatsAppContainer .content-detail {
  border-radius: 10px;
  width: fit-content;
  padding: 0.2rem 1rem;
  background-color: white;
  box-shadow: 0px 0px 3px 0px rgb(254, 254, 254);
}
#whatsAppContainer .content-detail span {
  margin-left: 1rem;
}
#whatsAppContainer .whatsapp-icons {
  /* border: 1px solid black; */
  border-radius: 50%;
  font-size: 3rem;
  background-color: #f44336;
  padding: 0.5rem;
  color: rgb(255, 255, 255);
}
#whatsAppContainer .whatsapp-all-icons {
  color: #f44336;
}
@media (max-width: 425px) {
  #whatsAppContainer .whatsapp-icons {
    /* border: 1px solid black; */
    font-size: 2rem;
  }
  #whatsAppContainer .content-detail span {
    font-size: small;
  }
}
</style>
