<template>
  <nav>
    <div class="fixed-top d-flex justify-content-between">
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
        <i class="bi bi-arrow-bar-left"></i>
      </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
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
      <div class="offcanvas-body">
        <div id="navbarNav">
          <div class="navbar-nav">
            <div v-if="user" class="d-flex flex-column">
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                :data-bs-target="'#update' + user.id"
              >
                <i class="bi bi-person-circle" style="font-size: 40px"></i>
              </button>
              <router-link to="/"><span id="peach">Home</span></router-link>
              <router-link to="/products"
                ><span id="peach">Products</span></router-link
              >
              <router-link to="/contact"
                ><span id="peach">Contact</span></router-link
              >
              <router-link to="/cart">
                <button class="btn">Cart ({{ num }})</button>
              </router-link>
              <editUserModal :user="user" />
            </div>
            <div v-if="admin" class="d-flex flex-column">
              <router-link to="/admin"
                ><span id="peach">Admin</span></router-link
              >
              <router-link to="/users"
                ><span id="peach">Users</span></router-link
              >
            </div>
            <div v-if="user" class="d-flex flex-column">
              <router-link :to="{ name: 'home' }">
                <button class="btn" @click="logout">Logout</button>
              </router-link>
            </div>
            <div v-else class="d-flex flex-column">
              <router-link to="/login"
                ><span id="peach">Login</span></router-link
              >
              <router-link to="/register"
                ><span id="peach">Register</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 30px;
  color: lightsteelblue;
  text-decoration: none;
  padding: 5px;
}
nav a.router-link-exact-active {
  color: black;
}
nav a:hover {
  color: lightslategrey;
}
.img-fluid {
  transition: transform 0.8s ease-in-out;
}
.img-fluid:hover {
  transform: rotate(720deg);
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
#peach:hover {
  padding: 10px;
  border: solid 1px black;
}
</style>
