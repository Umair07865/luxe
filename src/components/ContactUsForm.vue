<template>
  <div id="contactUsForm">
    <div class="inner-wraper d-flex">
      <div class="contact-details">
        <div class="contact-info">
          <div class="d-flex align-center">
            <v-icon class="phone-icon">mdi-phone</v-icon>
            <h4 class="ml-3">Call To Us</h4>
          </div>
          <v-text>we are available 24/7, 7 days a week.</v-text>
          <v-text>Phone: +923219973321</v-text>
        </div>
        <div class="contact-instructions">
          <div class="d-flex align-center">
            <v-icon class="phone-icon">mdi-mail</v-icon>
            <h4 class="ml-3">Write To Us</h4>
          </div>
          <v-text
            >Fill out out form and we will contact you within 24 hours.</v-text
          >
          <v-text>Email: umairnzm@gmail.com</v-text>
        </div>
      </div>
      <v-form v-model="valid" class="contact-us-form">
        <v-container cols="12">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                label="First name*"
                outlined
                varient="red"
                class="bg-info"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail*"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phone"
                :counter="11"
                :rules="phoneRule"
                label="Phone*"
                type="number"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="right">
            <v-col cols="12">
              <v-textarea
                label="Your Message"
                row-height="70"
                rows="3"
                v-model="message"
                variant="outlined"
                auto-grow
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end"
            ><button class="submit mr-2">Send Message</button></v-row
          >
        </v-container>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactUsForm",
  data: () => ({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    message: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    phoneRule: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length <= 11) || "Phone must be less than 11 characters",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      (v) => v.length <= 50 || "Email must be less than 50 characters",
    ],
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
#contactUsForm {
  padding: 2rem 8rem;
}
#contactUsForm .inner-wraper {
  padding: 2rem;
  box-shadow: 0px 0px 3px 0px rgb(125, 125, 125);
}
#contactUsForm .contact-details {
  width: 40%;
  height: 100%;
}
#contactUsForm .contact-us-form {
  width: 60%;
  height: 100%;
}
#contactUsForm .contact-us-form .submit {
  background-color: #f44336;
  color: white;
  padding: 0.5rem 5rem;
  border-radius: 5px;
}
#contactUsForm .contact-details {
  display: flex;
  flex-direction: column;
}
#contactUsForm .contact-details > div {
  height: 50%;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  gap: 1rem;
}
#contactUsForm .contact-details .phone-icon {
  background-color: #f44336;
  color: white;
  padding: 6px;
  border-radius: 50%;
}
@media (max-width: 1024px) {
  #contactUsForm {
    padding: 2rem;
  }
}
@media (max-width: 425px) {
  .inner-wraper {
    flex-direction: column;
  }
  #contactUsForm .contact-details {
    width: 100%;
  }
  #contactUsForm .contact-us-form {
    width: 100%;
  }
}
</style>
