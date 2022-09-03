<template>
  <div class="modal fade" id="addnew" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createModal">Add Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mx-auto">
              <div class="mb-3">
                <label for="addtitle" class="form-label">Product title:</label>
                <input class="form-control" type="text" v-model="title" name="addtitle" id="addtitle" placeholder="enter product title:" required/>
              </div>
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Image</label>
                <input
                  class="form-control"
                  type="text"
                  name="addImage"
                  id="addType"
                  v-model="image"
                  placeholder="Add image url"
                />
              </div>
              <div class="mb-3">
                <label for="addImage" class="form-label">Product Description</label>
                <input
                  class="form-control"
                  type="text"
                  name="addDescription"
                  id="addType"
                  v-model="description"
                  placeholder="Add Description"
                />
              </div>
              <div class="mb-3">
                <label for="addPrice" class="form-label">Price</label>
                <input
                  class="form-control"
                  type="number"
                  name="addPrice"
                  id="addPrice"
                  v-model="price"
                  placeholder="Add Price"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="add"
          >Add Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      image: "https://i.postimg.cc/QtgJDH83/default-product-image.png",
      description: "",
      price: ""
    };
  }, 
  methods: {
    add() {
      return this.$store.dispatch("addProduct", {
        title: this.title,
        image: this.image,
        description: this.description,
        price: this.price
      });
    },
  },
};
</script>

<style>
</style>
