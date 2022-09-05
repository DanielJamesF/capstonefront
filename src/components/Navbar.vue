<template>
  <nav class="navbar navbar-expand-md sticky-top active">
    <div class="container-fluid">
      <div id="div" class="nav-item">
        <router-link :to="{ name: 'home' }">
          <img
            class="img-fluid rounded-circle border border-dark border-2"
            style="width: 4rem; height: fit-content"
            src="https://i.postimg.cc/y8Z21msP/dotpetstore-1.png"
            alt="logo"
          />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
        <div class="navbar-nav">
          <div v-if="user" class="d-md-flex align-items-center">
            <router-link to="/">Home
            </router-link>
            <router-link to="/products">Products
            </router-link>
            <router-link to="/contact">Contact
            </router-link>
            <router-link to="/cart">
              <button class="btn">
                Cart
                <!-- ({{ num }}) -->
              </button>
            </router-link>
          </div>
          <div class="d-md-flex align-items-center" v-if="admin">
            <router-link to="/admin">Admin
            </router-link>
            <router-link to="/users">Users
            </router-link>
          </div>
          <div v-if="user">
            <router-link :to="{ name: 'home' }">
              <button class="btn" @click="logout">Logout</button>
            </router-link>
          </div>
          <div v-else class="d-md-flex">
            <router-link to="/login">Login
            </router-link>
            <router-link to="/register">Register
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
    num: function () {
      let Cnum = this.$store.state.cart;
      if (Cnum === null || Cnum === undefined) {
        Cnum = 0;
        return Cnum;
      } else {
        let i = Cnum.length;
        return i;
      }
    },
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      this.$store.state.cart = null;
      this.$store.state.token = null;
      this.$store.state.admin = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  border-bottom: solid 1px black;
  background-color: rgb(30, 30, 98);
}
img {
  right: 0;
  height: 5em;
  padding: 2px;
}
#div span {
  padding: 3px;
}
nav a {
  font-size: 17px;
  color: black;
  text-decoration: none;
  padding: 4px;
}
nav a.router-link-exact-active {
  color: lightsteelblue;
}
nav a:hover {
  color: lightslategrey;
}
.img-fluid {
  transition: transform 0.8s ease-in-out;
}
.img-fluid:hover {
  transform: rotate(360deg);
}
button {
  color: black;
}
</style>
