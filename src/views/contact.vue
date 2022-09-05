<template>
  <div class="container-fluid">
    <form
      id="form"
      action="https://formspree.io/f/xdobpjrz"
      method="post"
      class="form-control border-dark rounded-0 shadow"
    >
      <h1>contact form(:)</h1>
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        class="form-control border-dark"
        placeholder="enter name"
        required
      />
      <label for="surname">Surname:</label>
      <input
        class="form-control border-dark"
        name="surname"
        type="text"
        placeholder="enter surname"
        required
      />
      <label for="email">Email:</label>
      <input
        type="text"
        class="form-control border-dark"
        placeholder="enter email address"
        required
      />
      <label for="subject">Subject:</label>
      <input
        class="form-control border-dark"
        type="text"
        required
        placeholder="enter subject"
      />
      <label for="message">Message:</label
      ><textarea
        class="form-control border-dark"
        name="message"
        id="message"
        cols="30"
        rows="2"
        placeholder="leave a message"
      ></textarea>
      <button type="submit" class="btn m-1"><span> Submit</span></button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
  background-color: rgb(142, 142, 142);
  display: flex;
  justify-content: center;
  align-items: center;
}
#form {
  text-align: center;
  width: fit-content;
}
label {
  float: left;
  padding-left: 10px;
}
</style>