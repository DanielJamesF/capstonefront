<template>
  <section id="single" class="p-4">
    <div class="container" v-if="product">
      <div class="row g-2 mx-auto">
        <div class="col-md-6 d-flex align-items-center">
          <img
            :src="product[0].image"
            class="mx-auto img-fluid shadow"
            alt="image failed to load"
          />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-around text-start"
        >
          <h2 class="text-decoration-underline">{{ product[0].title }}</h2>
          <p class="shadow p-2">{{ product[0].description }}</p>
          <h2 class="fw-bolder">Price: R{{ product[0].price }}.00</h2>
        </div>
        <button @click="add" class="border-dark rounded">Add to cart</button>
        <div class="">
          <router-link to="/products">
            <button v-bind:onclick="back" class="border-dark rounded">
              return to all products
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Loading ...</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
    back() {
      this.$store.state.product = null;
    },
  },
};
</script>

<style scoped>
#single {
  min-height: 60vh;
  background-color: rgb(142, 142, 142);
}
button:hover {
  background-color: rgb(169, 169, 169);
}
</style>
