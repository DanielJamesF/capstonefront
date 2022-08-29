<template>
  <nav
    class="navbar navbar-expand-md sticky-top"
  >
    <div class="container-fluid">
      <div id="div" class="nav-item">
        <router-link :to="{ name: 'home' }">
        <img class="img-fluid" src="" alt="logo">
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav">
          <div v-if="user" class="d-md-flex">
            <router-link to="/">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link to="/products">
              <a class="nav-link">Products</a>
            </router-link>
            <router-link to="/contact">
              <a class="nav-link">Contact</a>
            </router-link>
            <router-link to="/cart">
              <button class="btn rounded-pill">
                <i class="fs-4 fa-solid fa-cart-shopping"></i>
              </button>
            </router-link>
          </div>
          <div v-if="admin" class="d-md-flex">
            <router-link to="/admin">
              <a class="nav-link">Admin</a>
            </router-link>
            <router-link to="/users">
              <a class="nav-link">Users</a>
            </router-link>
          </div>
          <div v-if="user">
            <button class="btn" @click="logout">Logout</button>
          </div>
          <div v-else class="d-md-flex">
            <router-link to="/login">
              <a class="nav-link">Login</a>
            </router-link>
            <router-link to="/register">
              <a class="nav-link">Register</a>
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
    return {

    }
  },
  mounted() {

  },
  computed: {
    
  }
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>