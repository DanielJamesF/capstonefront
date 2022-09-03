<template>
  <section id="home">
    <div class="row">
      <div class="col shadow">
        <h4><span class="text-decoration-underline">Welcome to</span> :</h4>
        <h1>
          <span id="dot">dot</span><span id="pet">Pet</span
          ><span id="store">Store</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  overflow-x: hidden;
  height: 87vh;
  background-image: url("https://i.postimg.cc/W4G8JSzp/puppy.jpg");
  background-color: rgb(73, 73, 137);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.row {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  color: rgb(142, 142, 142);
}
#dot {
  color: black;
}
#pet {
  color: rgb(155, 54, 54);
}
#store {
  color: rgb(147, 147, 79);
}
</style>