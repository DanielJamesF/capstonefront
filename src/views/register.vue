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
      <h2>Register</h2>
      <div class="col">
        <form
          id="register"
          class="form-control mx-auto rounded-0 shadow bg-transparent"
          @submit.prevent="register"
        >
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              id="name"
              v-model="firstname"
              class="form-control"
              type="text"
              placeholder="Enter Name"
              required
            />
            <label for="lastname">Surname:</label>
            <input
              id="lastname"
              v-model="lastname"
              class="form-control"
              type="text"
              placeholder="Enter Lastname"
              required
            />
            <label for="email">Email:</label>
            <input
              id="email"
              v-model="email"
              class="form-control"
              type="email"
              placeholder="enter email"
              required
            />
            <label for="password">Password:</label>
            <input
              id="password"
              v-model="password"
              class="form-control"
              type="password"
              placeholder="Choose password"
              required
            />
          </div>
          <button type="submit" class="border-dark border-1 rounded my-1">
            Register
          </button>
        </form>
      </div>
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
form:hover {
  background-color: transparent;
  border: none;
}
label {
  float: left;
  padding-left: 10px;
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
