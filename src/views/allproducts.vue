<template>
  <section id="products" class="p-3">
    <div class="container-fluid">
      <div id="bars" class="row p-3 mx-auto">
        <div v-if="user">
          <h2 id="welcome">Welcome {{ user.firstname }}</h2>
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
            <div id="row" class="row mx-auto">
              <h2>All Products</h2>
              <div
                v-for="product in products"
                :key="product"
                class="card p-3 mx-auto my-3 border-dark rounded-0 shadow"
                style="width: 18rem; height: fit-content"
              >
                <div class="my-auto">
                  <router-link
                    :to="{ name: 'product', params: { id: product.id } }"
                  >
                    <img :src="product.image" class="card-img-top" alt="" />
                  </router-link>
                  <p class="card-text" id="name">
                    <b>{{ product.title }}</b>
                  </p>
                  <p class="card-text" id="name">
                    Price: R{{ product.price }}.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div id="loading" onload="preload()">loading</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var loader = document.getElementById("loading");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 5000);
});
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
        this.$store.state.products.sort((a, b) => {
          return b.price - a.price;
        });
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
  },
};
</script>

<style scoped>
#products {
  min-height: 100vh;
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
</style>
