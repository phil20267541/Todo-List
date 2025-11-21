const app = Vue.createApp({
  data() {
    return {
      headerTitle: "Phil20267541's To Do List",
      loginButton: "Login",
      loginOverlay: false,
      navbarTitle: "My Lists",
      lists: [{title: "List"},{title: "List"},{title: "List"},{title: "List"},{title: "List"},],
      newListLabel: "+ New List",
      loginLabel: "Login",
      usernameLabel: "Username",
      username: "",
      passwordLabel: "Password",
      password: "",
    }
  },
  methods: {
    loginModal() {
      this.loginOverlay = !this.loginOverlay;
    },
    login() {
      console.log("hi")
    }
  }
})

app.mount('#app')