<template>
  <form action="#" @submit.prevent="onSubmit" id="signupForm">
    <v-alert dense border="left" type="success" v-if="status">
      Successfully signed up <strong> welcome to Luxee </strong>
    </v-alert>
    <h1>Create an account</h1>
    <p>Enter your details below</p>
    <input
      name="userName"
      type="text"
      id="userName"
      class="user-input-feild"
      placeholder="Name"
      v-model="userName"
      @keydown="nameValidations()"
    />
    <span :class="nameValidator.classValidator">{{
      nameValidator.message
    }}</span>
    <input
      type="email"
      name="userEmail"
      id="userEmail"
      class="user-input-feild"
      placeholder="Email"
      v-model="userEmail"
      @keydown="emailValidations()"
    />
    <span :class="emailValidator.classValidator">{{
      emailValidator.message
    }}</span>
    <input
      type="password"
      name="userPassword"
      id="userPassword"
      class="user-input-feild"
      placeholder="Password"
      v-model="userPassword"
      @keydown="passwordValidations()"
    />
    <span :class="passwordValidator.classValidator">{{
      passwordValidator.message
    }}</span>
    <div class="signup-btn-contols-wrapper">
      <button class="create-account-btn red" type="submit">
        Create Account
      </button>
      <button class="signup-with-google">
        <img src="../assets/google.svg" alt="loading" />
        <span>Sign up with Google</span>
      </button>
    </div>
    <center>
      <p>
        Already have an account?
        <router-link to="/login" class="links">Log in</router-link>
      </p>
    </center>
  </form>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      status: false,
      nameValidator: {
        message: "",
        classValidator: "",
      },
      emailValidator: {
        message: "",
        classValidator: "",
      },
      passwordValidator: {
        message: "",
        classValidator: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (
        this.nameValidations() == "valid" &&
        this.emailValidations() == "valid" &&
        this.passwordValidations() == "valid"
      ) {
        this.status = true;
        setTimeout(() => {
          this.status = false;
          router.push("/");
        }, 2000);
      }
    },
    nameValidations() {
      //name validations
      if (this.userName == "" || this.userName.length < 3) {
        return (
          (this.nameValidator.message =
            "User name must be at least 3 characters long and not be empty") &&
          (this.nameValidator.classValidator = "invalid")
        );
      } else {
        return (
          (this.nameValidator.message = "Accurate for validations") &&
          (this.nameValidator.classValidator = "valid")
        );
      }
    },
    emailValidations() {
      //email validations
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.userEmail == "" || emailRegex.test(this.userEmail) == false) {
        return (
          (this.emailValidator.message =
            "must follow the email pattern example@example.com and not be empty") &&
          (this.emailValidator.classValidator = "invalid")
        );
      } else {
        return (
          (this.emailValidator.message = "Accurate for validations") &&
          (this.emailValidator.classValidator = "valid")
        );
      }
    },
    //password validations
    passwordValidations() {
      if (this.userPassword == "" || this.userPassword.length < 6) {
        return (
          (this.passwordValidator.message =
            " Password must meet the following criteria: - Minimum length of 6 and not be empty") &&
          (this.passwordValidator.classValidator = "invalid")
        );
      } else {
        return (
          (this.passwordValidator.message = "Accurate for validations") &&
          (this.passwordValidator.classValidator = "valid")
        );
      }
    },
    resetForm() {
      this.userEmail && this.userName && this.userPassword == "";
    },
  },
};
</script>
<style scoped>
#signupForm {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: initial;
  height: 100%;
  width: 50%;
  gap: 0.5rem;
  flex-direction: column;
  margin: auto;
}
#signupForm h1 {
  font-weight: 500;
  letter-spacing: 0.5rem;
}
.user-input-feild {
  border-bottom: 1px solid rgb(199, 199, 199);
  padding: 0.5rem 0;
}
.user-input-feild:focus {
  outline: none;
}
.signup-btn-contols-wrapper {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.create-account-btn {
  height: 3rem;
  border-radius: 5px;
  color: white;
}
.signup-with-google {
  height: 3rem;
  border-radius: 5px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid grey;
}
.invalid {
  color: red;
}
.valid {
  color: rgb(3, 100, 15);
}
.links {
  color: rgb(0, 0, 0);
  margin-left: 1rem;
}
@media (max-width: 1024px) {
  #signupForm {
    width: 80%;
    padding: 1rem;
  }
}
@media (max-width: 425px) {
  #signupForm {
    width: 100%;
    padding: 1rem;
  }
}
</style>
