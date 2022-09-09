<template>
  <section id="loginPage">
    <div class="container-fluid d-flex justify-content-center align-content-center">
      <div class="row">
        <h2>Login</h2>
        <div class="col">
          <form
            id="login"
            class="form-control mx-auto shadow rounded-0 bg-transparent"
            @submit.prevent="login"
          >
            <div class="form-group mb-3">
              <input
                type="email"
                class="form-control my-3"
                placeholder="enter email"
                id="email"
                v-model="email"
              />
              <input
                type="password"
                class="form-control my-3"
                id="password"
                placeholder="enter password"
                v-model="password"
              />
            </div>
            <button type="submit" class="rounded border-dark border">
              <span>Submit</span>
            </button>
          </form>
        </div>
        <p>
          oh wait i dont have an account maybe i should
          <router-link :to="{ name: 'register' }"
            ><a class="nav-link">Register</a>
          </router-link>
        </p>
      </div>
      <div v-if="user">
        <h3>{{ user.firstname }} was successfuly logged in</h3>
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
  background-color: rgb(142, 142, 142);
  display: flex;
  justify-content: center;
  align-items: center;
}
form:hover {
  background-color: transparent;
  border: none;
}
button:hover {
  background-color: rgb(151, 149, 149);
}
input:hover {
  border: solid 1px black;
  border-radius: 0;
}
h2 {
  font-size: 80px;
}
</style>
