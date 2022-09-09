<template>
  <section id="products">
    <div class="container-fluid">
      <div id="bars" class="row p-3 mx-auto">
        <div v-if="user">
          <h1 id="welcome">Welcome: {{ user.firstname }}</h1>
          <div class="col-md-6 mx-auto">
            <input
              type="text"
              class="form-control border-dark shadow-none"
              v-model="search"
              placeholder="Search By Name ..."
            />
          </div>
          <div class="col-md-6 mx-auto">
            <select
              class="form-select border-dark shadow-none"
              id="price"
              @change="sortPrice"
            >
              <option value="All">Sort By Price</option>
              <option value="asc">Lowest To Highest</option>
              <option value="desc">Highest to Lowest</option>
            </select>
          </div>
          <div id="products" v-if="products">
            <h2>All Products</h2>
            <div v-if="products.length > 0">
              <div id="row" class="row mx-auto">
                <div
                  v-for="product in products"
                  :key="product"
                  class="card p-3 mx-auto my-2 border-dark rounded-0 shadow"
                  style="width: 13rem; height: fit-content"
                >
                  <router-link
                    :to="{ name: 'product', params: { id: product.id } }"
                  >
                    <div class="my-auto">
                      <img :src="product.image" class="card-img-top" alt="" />
                      <p class="card-text" id="name">
                        <b>{{ product.title }}</b>
                      </p>
                      <p class="card-text" id="name">
                        Price: R{{ product.price }}.00
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div v-else>
              <h2>No results for serch</h2>
            </div>
          </div>
        </div>
        <div v-else>
          <h2>
            <router-link to="/login">return to login</router-link>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      category: "All",
      asc: true,
    };
  },
  methods: {
    sortPrice() {
      let up = document.getElementById("price").value;
      if (up === "asc") {
        this.$store.state.products.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        if (up === "desc") {
          this.$store.state.products.sort((a, b) => {
            return b.price - a.price;
          });
        } else {
          if (up === "All") this.$store.dispatch("getProducts");
        }
      }
    },
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        return isMatch;
      });
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.commit("setproduct", null);
  },
};
</script>

<style scoped>
#products {
  min-height: 100vh;
  padding-top: 80px;
  background-color: rgb(142, 142, 142);
}
.card-img-top {
  aspect-ratio: 1;
  position: center;
  object-fit: cover;
}
.card:hover {
  background-color: rgba(169, 169, 169, 0.943);
  transition-delay: 150ms;
}
a{
  text-decoration: none;
  color: black;
}
h2{
  font-size: 50px;
}
</style>
