<template>
  <div
    :id="'update' + user.id"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Update User {{ user.id }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="updateFirstName" class="form-label">Name:</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="user.firstname"
                  placeholder="Enter Name:"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="updateLastName" class="form-label"
                  >Lastname :</label
                >
                <input
                  class="form-control"
                  type="text"
                  v-model="user.lastname"
                  placeholder="Enter Surname:"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="updateimg" class="form-label">Email </label>
                <input
                  class="form-control"
                  type="text"
                  name="updateEmail"
                  id="updateEmail"
                  v-model="user.email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="updatePrice" class="form-label">User role</label>
                <input
                  class="form-control"
                  type="text"
                  name="updateRole"
                  id="updateRole"
                  v-model="user.role"
                  placeholder="Enter Rolee"
                  required
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <span> Close</span>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="update"
            >
              <span> Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  methods: {
    update() {
      return this.$store.dispatch("updateUser", this.user);
    },
  },
};
</script>

<style scoped>
</style>
