<template>
  <form action="#" id="loginForm">
    <h1>Log in to Luxe</h1>
    <p>Enter your details below</p>
    <input
      type="email"
      name="userEmail"
      id="userEmail"
      class="user-input-feild"
      placeholder="Email or Phone Number"
    />
    <input
      type="password"
      name="userPassword"
      id="userPassword"
      class="user-input-feild"
      placeholder="Password"
    />
    <div class="control-buttons-wrapper">
      <button class="btn-submition red">Log in</button>
      <button class="btn-forget-pass">Forget Password?</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormsInput",
};
</script>
<style scoped>
#loginForm {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: initial;
  height: 100%;
  width: 50%;
  gap: 1rem;
  flex-direction: column;
  margin: auto;
}
#loginForm h1 {
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
.control-buttons-wrapper {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
}
.btn-submition {
  height: 3rem;
  width: 8rem;
  border-radius: 5px;
  color: white;
}
.btn-forget-pass {
  height: 3rem;
  width: 8rem;
  border-radius: 5px;
  color: red;
}
@media (max-width: 425px) {
  #loginForm {
    width: 100%;
    padding: 1rem;
  }
}
</style>
