<template>
  <section id="cart">
    <div v-if="cart">
      <div class="row mx-auto">
        <div class="col-md-6">
          <div
            v-for="product in cart"
            :key="product"
            :product="product"
            class="card p-2 mx-auto border-dark rounded-0 shadow"
            style="width: 13rem; height: fit-content"
          >
            <h3>{{ product.title }}</h3>
              <img :src="product.image" alt="" class="img-fluid" />
            <p>Item number: {{ product.id }}</p>
            <button
              class="btn border-dark"
              @click="$store.dispatch('removeOne', product.id)"
            >
              <span>Delete</span>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col">
              <div class="card p-3 border-dark rounded-0 shadow">
                <div>
                  <h2 id="total1"><span>Cart Summary</span></h2>
                  <div
                    v-for="item in cart"
                    :key="item"
                    :item="item"
                    class="row"
                  >
                    <div class="col-md-6">
                      <p>
                        <span class="">{{ item.title }}</span>
                      </p>
                    </div>
                    <div class="col-md-5">
                      <p>
                        <span>R{{ item.price }}</span>
                      </p>
                    </div>
                  </div>
                  <p id="total">
                    <span class="fw-bolder">Total:</span>(
                    <span>{{ num }} item</span> ) <span>R{{ total }}.00</span>
                  </p>
                  <div>
                    <button class="btn" @click="removeAll">
                      <span>Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="else" v-else>
      <h2>Cart Empty ...</h2>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let prices = this.$store.state.cart;
      let sum = prices.reduce((x, cart) => {
        return x + cart.price;
      }, 0);
      return sum;
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
    removeAll() {
      this.$store.dispatch("deleteCart");
      this.cart = null;
    },
  },
};
</script>

<style scoped>
#cart {
  min-height: 100vh;
  padding-top: 80px;
  background-color: rgb(142, 142, 142);
}

#else {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  aspect-ratio: 1;
  object-fit: cover;
}

#total1 {
  border-bottom: solid 1px black;
}

#total {
  border-top: solid 1px black;
  border-bottom: solid 1px black;
}
.btn:hover {
  background-color: rgb(188, 188, 188);
}
</style>
