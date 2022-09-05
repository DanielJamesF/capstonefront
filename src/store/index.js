import {
  createStore
} from "vuex";
import {
  router
} from "@/router/index.js";

export default createStore({
  state: {
    products: null,
    product: null,
    token: null,
    user: null,
    admin: false,
    users: null,
    cart: null,
    asc: true
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    setuser: (state, user) => {
      state.user = user;
    },
    setcart: (state, cart) => {
      let newCart = JSON.parse(cart);
      state.cart = newCart;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    // retrieves all products
    getProducts: async (context) => {
      fetch("https://capstoneapibackend.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setproducts", data.results));
    },
    // retrieves single
    getProduct: async (context, id) => {
      fetch("https://capstoneapibackend.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setproduct", data.results));
    },
    // adds product
    addProduct: async (context, payload) => {
      const {
        title,
        image,
        description,
        price
      } = payload;
      fetch("https://capstoneapibackend.herokuapp.com/products", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            image: image,
            description: description,
            price: price,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },
    // update product
    updateProduct: async (context, product) => {
      fetch("https://capstoneapibackend.herokuapp.com/products/" + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },
    // Deletes Item from db
    deleteProduct: async (context, id) => {
      fetch("https://capstoneapibackend.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then(() => context.dispatch("getProducts"));
    },

    // adds user to db
    register: async (context, payload) => {
      const {
        firstname,
        lastname,
        email,
        password,
        role,
      } = payload;
      fetch("https://capstoneapibackend.herokuapp.com/users", {
          method: "POST",
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            role: role,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Registration Successful") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            context.commit("setuser", user);
            context.commit("setToken", token);
            context.dispatch("getProducts");
            router.push({
              name: "products",
            });
          } else {
            alert(data.msg);
            document.getElementById("register").reset();
          }
        });
    },

    // logs user in
    login: async (context, payload) => {
      const {
        email,
        password
      } = payload;
      fetch("https://capstoneapibackend.herokuapp.com/users", {
          method: "PATCH",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": await context.state.token,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Login Successful") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            let cart = data.user.cart;
            context.commit("setuser", user);
            context.commit("setToken", token);
            context.commit("setcart", cart);
            if (user.role === "admin") {
              context.state.admin = true
            }
            console.log(context.state.admin)
            router.push({
              name: "products"
            })
          } else {
            alert(data.msg)
          }
        });
    },

    // Deletes user from db
    deleteuser: async (context, id) => {
      fetch("https://capstoneapibackend.herokuapp.com/" + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then(() => context.dispatch("getusers"));
    },

    // update user infor
    updateUser: async (context, user) => {
      fetch("https://capstoneapibackend.herokuapp.com/users/" + user.id, {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getusers");
        });
    },

    // retrieves all users
    getusers: async (context) => {
      fetch("https://capstoneapibackend.herokuapp.com/users", {
          headers: {
            "x-auth-token": await context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          context.commit("setusers", data.results);
        });
    },

    // get cart
    getCart: async (context, id) => {
      id = context.state.user.id;
      fetch("https://capstoneapibackend.herokuapp.com/" + id + "/cart", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          let cart = JSON.stringify(data);
          context.commit("setcart", cart);
        });
    },

    //delete one cart item
    removeOne: async (context, id, userid) => {
      userid = context.state.user.id
      fetch("https://capstoneapibackend.herokuapp.com/users/" + userid + "/cart/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          console.log(id)
          alert(data.msg)
          context.state.cart = null
          context.dispatch("getCart")
        })
    },

    // delete all cart items
    deleteCart: async (context, userid) => {
      userid = context.state.user.id
      fetch("https://capstoneapibackend.herokuapp.com/users/" + userid + "/cart", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          context.dispatch("getCart")
        })
    },

    addToCart: async (context, id, userid) => {
      if (context.state.user === null) {
        alert("Please login")
      } else {
        userid = context.state.user.id;
        fetch("https://capstoneapibackend.herokuapp.com/users/" + userid + "/cart", {
            method: "POST",
            body: JSON.stringify(id),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "x-auth-token": context.state.token,
            },
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(id);
            alert(data.msg);
            context.dispatch("getCart");
          });
      }
    },
  },
  modules: {},
});