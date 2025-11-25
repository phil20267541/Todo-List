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
      emailLabel: "Email",
      email: "",
      passwordLabel: "Password",
      password: "",
      showPasswordLabel: "Show Password",
      passwordVisible: false,
      submitButtonLabel: "Submit"
    }
  },
  methods: {
    loginModal() {
      this.loginOverlay = !this.loginOverlay;
    },
    showPassword() {
      this.passwordVisible = !this.passwordVisible;
      if (this.passwordVisible) {
        this.showPasswordLabel = "Hide Password";
      } else {
        this.showPasswordLabel = "Show Password";
      }
    },
    async login() {
      const res = await fetch('https://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      });
      const result = await res.json();
      if (result.success) {
        alert('Login successful!');   
      }   
    }
  }
})

app.mount('#app')