<template>
  <div class="fixed-top d-flex justify-content-between p-2">
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
      id="button"
      class="btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <i class="bi bi-arrow-bar-right"></i>
    </button>
  </div>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <span id="dot">dot</span><span id="pet">Pet</span
        ><span id="store">Store</span>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex justify-content-center">
      <nav class="navbar sticky-top d-flex align-content-center">
        <div class="container-fluid">
          <div id="navbarNav">
            <div class="navbar-nav">
              <div v-if="user" class="d-flex flex-column">
                <button
                  type="button"
                  class="btn d-flex justify-content-center"
                  data-bs-toggle="modal"
                  :data-bs-target="'#update' + user.id"
                >
                  <i class="bi bi-person-circle"> User Profile</i>
                </button>
                <router-link to="/">Home </router-link>
                <router-link to="/products">Products </router-link>
                <router-link to="/contact">Contact </router-link>
                <router-link to="/cart">
                  <button class="btn">Cart ({{ num }})</button>
                </router-link>
                <editUserModal :user="user" />
              </div>
              <div class="d-flex flex-column" v-if="admin">
                <router-link to="/admin">Admin </router-link>
                <router-link to="/users">Users </router-link>
              </div>
              <div v-if="user">
                <router-link :to="{ name: 'home' }">
                  <button class="btn" @click="logout">Logout</button>
                </router-link>
              </div>
              <div v-else class="d-flex flex-column">
                <router-link to="/login">Login </router-link>
                <router-link to="/register">Register </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import editUserModal from "@/components/editUserModal.vue";
export default {
  data() {
    return {};
  },
  components: {
    editUserModal,
  },
  mounted() {
    // this.$store.dispatch('getusers');
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    users() {
      return this.$store.state.users;
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
  height: 100%;
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
  font-size: 20px;
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
#button {
  color: lightskyblue;
}
button {
  color: black;
}
#dot {
  color: black;
}
#pet {
  color: rgb(155, 54, 54);
}
#store {
  color: rgb(147, 147, 79);
}
</style>
