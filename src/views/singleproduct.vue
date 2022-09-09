<template>
  <section id="single">
    <div class="container" v-if="product">
      <div class="row g-2 mx-auto">
        <div>
          <router-link to="/products">
            <button v-bind:onclick="back" class="border-dark rounded">
              return to all products
            </button>
          </router-link>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <img
            :src="product[0].image"
            class="mx-auto img-fluid shadow"
            style="height: 20rem; width: fit-content"
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
        <div>
          <button @click="add" class="border-dark rounded">Add to cart</button>
        </div>
      </div>
    </div>
      <div v-else class="loader">
        <h1>LOADING<span class="bullets">.</span></h1>
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
  padding: 80px;
  background-color: rgb(142, 142, 142);
}
button:hover {
  background-color: rgb(169, 169, 169);
}

.loader {
  background-color: rgb(142, 142, 142);
  text-align:center;
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader h1 {
  color:white;
  font-family: 'arial';
  font-weight: 800;
  font-size: 4em;
}
.bullets{
  animation: dots 2s steps(3, end) infinite;
}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}

</style>
