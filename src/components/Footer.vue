<template>
  <div class="container-fluid">
    <br />
    <div class="row">
      <div id="links" class="col d-flex flex-column align-items-start">
        <h1>About us</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact us</router-link>
      </div>
    </div>
    <div class="row">
      <div id="links2" class="col">
        <h1>Get in touch</h1>
      </div>
    </div>
    <p>&copy;Copyright. All Rights Reserved by dotPetStore.</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background-color: rgb(30, 30, 98);
  border-top: solid black 1px;
  height: fit-content;
}
a{
  text-decoration: none;
  color: black;
}
a.router-link-exact-active {
  color: lightsteelblue;
}
a:hover{
  color: blue;
}
h1, p{
  color: rgb(142, 142, 142);
}
</style>