<template>
  <section id="admin">
    <div v-if="admin">
      <div v-if="products">
        <div class="container-fluid">
          <h2>User: {{ user.firstname }}</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Product title</th>
                <th scope="col">Product price</th>
                <th scope="col">User id</th>
                <th scope="col">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#addnew"
                    class="btn"
                  >
                    <i class="fa-regular fa-square-plus"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product">
                <td>{{ product.id }}</td>
                <td>{{ product.title }}</td>
                <td>R{{ product.price }}.00</td>
                <td>{{ product.userid }}</td>
                <td>
                  <a
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    :data-bs-target="'#update' + product.id"
                    ><i class="fa-solid fa-pen-to-square"></i
                  ></a>
                  <a
                    class="btn"
                    id="delete"
                    @click="$store.dispatch('deleteProduct', product.id)"
                    ><i class="fa-solid fa-trash-can"></i
                  ></a>
                </td>
                <updateModal :product="product" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="else" v-else class="text-center">
      <h1>Unauthorised access</h1>
      <p>sorry only admins are allowed to view this page</p>
      <router-link :to="{ name: 'home' }" class="nav-link">
        <button type="button" class="btn border border-2 border-dark">
          Return home
        </button></router-link
      >
    </div>
    <createModal />
  </section>
</template>

<script>
import createModal from "@/components/createModal.vue";
import updateModal from "@/components/updateModal.vue";

export default {
  components: {
    createModal,
    updateModal,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
#admin {
  min-height: 100vh;
  padding-top: 80px;
  background-color: rgb(142, 142, 142);
  color: white;
}
th {
  color: white;
  font-size: 10px;
}
i {
  color: white;
  font-size: 10px;
}
i:hover {
  color: black;
}
td {
  color: white;
  font-size: 10px;
}
td:hover {
  color: black;
}
#else {
  height: 100vh;
}
</style>
