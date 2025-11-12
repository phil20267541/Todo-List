const app = Vue.createApp({
  data() {
    return {
      header_title: "Phil20267541's ToDo List",
      login_button: "Login",
      login_overlay: false
    }
  },
  methods: {
    LoginModal() {
      this.login_overlay = !this.login_overlay;
    }
  }
})

app.mount('#app')