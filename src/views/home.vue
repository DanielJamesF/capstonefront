<template>
  <section id="home">
    <div class="row">
        <div class="col shadow-lg text-black-50">
            <h3>Welcome to</h3>
            <h1>dotPetStore</h1>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#home{
    height: 100vh;
    background-image: url("https://i.postimg.cc/W4G8JSzp/puppy.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.row{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>