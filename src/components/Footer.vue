<template>
  <div id="footerBar">
    <div class="footer-wrapper">
      <div class="footer-list-wrapper">
        <h3>Exclusive</h3>

        <ul>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>
            <div class="footer-input-wrapper">
              <input
                type="email"
                name="email"
                class="footer-email-input"
                placeholder="Enter your email"
              />

              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="footer-input-icon-arrow-left"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-list-wrapper">
        <h3>Support</h3>
        <ul>
          <li>111 Bijoy sarani, Dhaka DH 1515, Bangladesh.</li>
          <li>luxe@gmail.com</li>
          <li>+88051-88888-9999</li>
        </ul>
      </div>
      <div class="footer-list-wrapper">
        <h3>Account</h3>

        <ul>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div class="footer-list-wrapper">
        <h3>Quick Link</h3>

        <ul>
          <li>Privacy Policy</li>
          <li>Term Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="footer-list-wrapper">
        <h3>Download App</h3>

        <ul>
          <li>
            <p>Save $3 with App New User Only</p>
            <div class="qr-wrapper">
              <img
                src="../assets/luxeqr.png"
                class="luxe-qr-code"
                alt="loading"
              />
              <div class="stores-wrapper">
                <img
                  src="../assets/playstore.png"
                  class="store-buttons"
                  alt="loading"
                />
                <img
                  src="../assets/appstore.png"
                  class="store-buttons"
                  alt="loading"
                />
              </div>
            </div>
          </li>
          <li>
            <div class="social-media-platforms">
              <v-icon class="social-icon social-media-icons"
                >mdi-facebook</v-icon
              >
              <v-icon class="social-icon social-media-icons"
                >mdi-twitter</v-icon
              >
              <v-icon class="social-icon social-media-icons"
                >mdi-instagram</v-icon
              >
              <v-icon class="social-icon social-media-icons"
                >mdi-linkedin</v-icon
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footerBar",
};
</script>
<style scoped>
#footerBar {
  border: 1px solid black;
  height: fit-content;
  color: white;
  background-color: black;
}
.footer-wrapper {
  /* border: 1px solid rgb(255, 0, 0); */
  width: 100%;
  display: grid;
  grid-template-rows: repeat(1, 100%);
  grid-template-columns: repeat(5, 20%);
  padding: 2rem 2rem 0 2rem;
  height: 100%;
  border-bottom: 1px solid rgb(37 35 35);
}
#footerBar ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
#footerBar ul li {
  margin-top: 1em;
}
.footer-list-wrapper {
  /* border: 1px solid rgb(208, 199, 199); */
  padding: 2rem 3rem;
  height: 100%;
}
.footer-input-wrapper {
  border: 1px solid rgb(253, 253, 253);
  display: flex;
  max-width: 100%;
  padding: 0.5rem;
  width: fit-content;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  border-radius: 5px;
}
.footer-email-input {
  bottom: 1px solid rgba(237, 7, 7, 0.808);
  width: 80%;
  background: transparent;
  color: white;
}
.footer-email-input:focus-visible {
  outline: none;
  border: none;
}
.footer-input-icon-arrow-left {
  position: absolute;
  right: 5px;
}
.luxe-qr-code {
  height: 5.5rem;
  width: 40%;
  outline: 2px solid white;
  border-radius: 5px;
}
.qr-wrapper {
  display: flex;
  /* border: 1px solid white; */
}
.stores-wrapper {
  /* border: 1px solid orange; */
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.store-buttons {
  border-radius: 5px;
  outline: 2px solid white;
  height: 2rem;
  width: 80%;
}
#footerBar ul li p {
  font-size: 12px;
}
.social-media-platforms {
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}
.social-media-icons {
  color: white;
  height: 2rem;
  width: 2rem;
}
@media (max-width: 1024px) {
  .footer-wrapper {
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: repeat(4, 25%);
    padding: 2rem 1rem 0 1rem;
  }
  .footer-list-wrapper {
    padding: 2rem;
  }
}
@media (max-width: 768px) {
  .footer-wrapper {
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: repeat(3, 33%);
    padding: 0;
  }
  .luxe-qr-code {
    height: 4.5rem;
  }
}
@media (max-width: 425px) {
  .footer-wrapper {
    grid-template-rows: repeat(5, 300px);
    grid-template-columns: repeat(1, 100%);
    padding: 1rem;
  }
  .store-buttons {
    height: 2.5rem;
  }
  .luxe-qr-code {
    height: 5.5rem;
    width: 5.5rem;
  }
  .footer-list-wrapper {
    padding: 0rem;
  }
}
</style>
