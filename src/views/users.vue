<template>
  <section id="usersSection" class="p-5" v-if="admin">
    <div v-if="user">
      <div v-if="users">
        <div class="container-fluid">
          <div class="container text-center">
            <h2 class="text-black">User: {{ user.firstname }}</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Role</th>
                  <th scope="col">User Email</th>
                </tr>
              </thead>
              <tr v-for="user in users" :key="user">
                <td>{{ user.id }}</td>
                <td>{{ user.firstname }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <a
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    :data-bs-target="'#update' + user.id"
                    ><i class="fa-solid fa-pen-to-square"></i
                  ></a>
                  <a
                    class="btn"
                    id="delete"
                    @click="$store.dispatch('deleteuser', user.id)"
                    ><i class="fa-solid fa-trash-can"></i
                  ></a>
                </td>
                <updateUserModal :user="user" />
              </tr>
            </table>
          </div>
        </div>
      </div>
      <createModal />
    </div>
  </section>
  <div id="else" v-else class="text-center d-flex flex-column">
    <h1>Unauthorized access</h1>
    <p>only admins are allowed to view this page</p>
    <router-link
      :to="{ name: 'home' }"
      class="btn border border-dark border-1 p-1 rounded-0 nav-link"
    >
      <span>Return Home</span></router-link
    >
  </div>
</template>

<script>
import createModal from "@/components/createModal.vue";
import updateUserModal from "@/components/updateUserModal.vue";

export default {
  components: { createModal, updateUserModal },
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
};
</script>

<style scoped>
#usersSection {
  min-height: 100vh;
  padding-top: 80px;
  background-color: rgb(142, 142, 142);
}
th {
  color: white;
}
i {
  color: white;
}
i:hover{
  color: black;
}
td{
  color: white;
}
td:hover{
  color: black;
}
#else {
  height: 100vh;
}
.btn:hover {
  background-color: lightslategray;
}
</style>
