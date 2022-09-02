<template>
  <section id="loginPage">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-content-center">
        <form
          id="login"
          class="form-control mx-auto shadow border-dark border-1 rounded-0"
          @submit.prevent="login"
        >
          <h2>Login(:)
          </h2>
          <div class="form-group mb-3">
            <input
              type="email"
              class="form-control my-3 border-dark"
              placeholder="enter email"
              id="email"
              v-model="email"
            />
            <input
              type="password"
              class="form-control my-3 border-dark"
              id="password"
              placeholder="enter password"
              v-model="password"
            />
          </div>
          <button type="submit" class="rounded border-dark border"><span>Submit</span></button>
        </form>
        <p>
          oh wait i dont have an account maybe i should
          <router-link :to="{ name: 'register' }"
            ><a class="nav-link">Register</a>
          </router-link>
        </p>
      </div>
      <div v-if="user">
        <h2>{{ user.firstname }} Login Successful</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      return this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
#loginPage {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: fit-content;
}
button:hover{
    background-color: rgb(151, 149, 149);
}
</style>
