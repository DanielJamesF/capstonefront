<template>
  <div
    class="
      container-fluid
      text-center
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="row">
      <form
        id="register"
        class="form-control mx-auto border-dark rounded-0 shadow"
        @submit.prevent="register"
      >
        <h2>Register(:)</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            id="name"
            v-model="firstname"
            class="form-control border-dark"
            type="text"
            placeholder="Enter Name"
            required
          />
          <label for="lastname">Surname:</label>
          <input
            id="lastname"
            v-model="lastname"
            class="form-control border-dark"
            type="text"
            placeholder="Enter Lastname"
            required
          />
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="email"
            class="form-control border-dark"
            type="email"
            placeholder="enter email"
            required
          />
          <label for="password">Password:</label>
          <input
            id="password"
            v-model="password"
            class="form-control border-dark"
            type="password"
            placeholder="Choose password"
            required
          />
        </div>
        <button type="submit" class="border-dark border-1 rounded my-1">
          Register
        </button>
      </form>
      <p>
        oh wait i've been here before maybe i should
        <router-link :to="{ name: 'login' }"
          ><a class="nav-link">Login</a>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      role: "",
      password: "",
    };
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        role: this.role,
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
.container-fluid {
  min-height: 100vh;
  background-color: rgb(142, 142, 142);
}
form {
  width: fit-content;
}
label {
  float: left;
  padding-left: 10px;
}
button:hover {
  background-color: rgb(151, 149, 149);
}
</style>
