<template>
  <div :id="'update'+user.id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update User {{user.id}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span></span></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- <div class=""> -->

            <div class="col-md-6">
              <!-- name -->
              <div class="mb-3">
                <label for="updateName" class="form-label">Name:</label>
                <input class="form-control" type="text" v-model="user.firstname" placeholder="Enter Name:" required />
              </div>

              <!-- lastname -->
              <div class="mb-3">
                <label for="updateName" class="form-label">Lastname :</label>
                <input class="form-control" type="text" v-model="user.lastname" placeholder="Enter Name:" required />
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="updateimg" class="form-label">Email </label>
                <input class="form-control" type="text" name="updateimg" id="updateimg" v-model="user.email"
                  placeholder="episode count" />
              </div>
            </div>

            <div class="col-md-6">
              <!-- userRole -->
              <div class="mb-3">
                <label for="updatePrice" class="form-label">User role</label>
                <input class="form-control" type="text" name="updatePrice" id="updatePrice" v-model="user.role"
                  placeholder="Enter Price" required />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><span>
              Close</span>
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="update"><span>
              Update</span>
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
      return this.$store.dispatch("updateUser", this.user)
    }
  }
}


</script>

<style>
</style>
