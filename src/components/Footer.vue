<template>
  <div class="container-fluid">
    <br />
    <div class="row">
      <div id="links" class="col-md-4 d-flex flex-column">
        <h1>About us</h1>
        <p>
          We are an organisation that specialise in finding and collecting
          breeds of dogs and finding homes for them via our consumers in
          partnership with Cape of Good Hope SPCA.
        </p>
      </div>
      <div id="links3" class="col-md-4 d-flex flex-column">
        <h1>Qick links</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/contact">Contact us</router-link>
      </div>
      <div id="links2" class="col-md-4 d-flex flex-column">
        <h1>Get in touch</h1>
        <ul>
          <li>
            <p><i class="bi bi-telephone"></i> +27658057987</p>
          </li>
          <li>
            <p><i class="bi bi-browser-chrome"> dotPetStore.com</i></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row border-top border-1">
      <div class="col">
        <p>&copy;Copyright 2022. All Rights Reserved by dotPetStore.</p>
      </div>
      <div class="col">
        <p>Made by: Daniel Fredericks</p>
      </div>
    </div>
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
a {
  text-decoration: none;
  color: black;
}
a.router-link-exact-active {
  color: lightsteelblue;
}
a:hover {
  color: blue;
}
h1,
p {
  color: rgb(142, 142, 142);
}
li {
  list-style: none;
}
</style>