<template>
  <div
    class="
      container-fluid
      text-center
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="row">
      <h2>Contact</h2>
      <div class="col">
        <form
          id="contact"
          action="https://formspree.io/f/xdobpjrz"
          method="post"
          class="form-control bg-transparent rounded-0 shadow"
        >
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="enter name"
            required
          />
          <label for="surname">Surname:</label>
          <input
            class="form-control"
            name="surname"
            type="text"
            placeholder="enter surname"
            required
          />
          <label for="email">Email:</label>
          <input
            type="text"
            class="form-control"
            placeholder="enter email address"
            required
          />
          <label for="subject">Subject:</label>
          <input
            class="form-control"
            type="text"
            required
            placeholder="enter subject"
          />
          <label for="message">Message:</label
          ><textarea
            class="form-control"
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder="leave a message"
          ></textarea>
          <button type="submit" class="btn m-1"><span> Submit</span></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
  background-color: rgb(142, 142, 142);
}
form:hover {
  background-color: transparent;
  border: none;
}
label {
  float: left;
  padding-left: 10px;
}
input:hover {
  border-radius: 0;
  border: solid 1px black;
}
textarea:hover {
  border-radius: 0;
  border: solid 1px black;
}
h2{
  font-size: 80px;
}
</style>