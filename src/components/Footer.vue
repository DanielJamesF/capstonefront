<template>
  <div class="container-fluid">
    <br>
    <div class="row">
        <div id="links2" class="col">
            <h1>Social links</h1>
        </div>
        <div id="links" class="col">
          <h1>Quick links</h1>
          <router-link to="/">- Home page</router-link>
          <br />
          <router-link to="/about">- About us</router-link>
          <br />
          <router-link to="/login">- Login page</router-link>
          <br />
          <router-link to="/register">- Register page</router-link>
          <br />
          <router-link to="/contact">- Contact us</router-link>
        </div>
    </div>
    <p>&copy;Copyright. All Rights Reserved by dotPetStore.</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid{
  border-top: solid black 1px;
}
</style>