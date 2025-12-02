const app = Vue.createApp({
  data() {
    return {
      headerTitle: "Phil20267541's To Do List",
      loginButton: "Login",
      loginOverlay: false,
      navbarTitle: "My Lists",
      lists: [
        { title: "List 1", tasks: [{ task: "Sample Task", completed: false }] },
        { title: "List 2", tasks: [{ task: "Another Task", completed: true }] }
      ],
      newListLabel: "+ New List",
      loginLabel: "Login",
      emailLabel: "Email",
      email: "",
      passwordLabel: "Password",
      password: "",
      showPasswordLabel: "Show Password",
      passwordVisible: false,
      submitButtonLabel: "Submit",
      loggedIn: false,
      currentListTitle: "Current List",
      inProgressLabel: "In Progress",
      completedLabel: "Completed",
      currentList: { title: "Current List", tasks: [] },
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
      const res = await fetch('https://todo-list-lj3k.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email, password: this.password })
      });
      const result = await res.json();
      if (result.success) {
        this.loginOverlay = false;
        this.email = '';
        this.password = '';
        this.loggedIn = true;
      }   
    },
    newList() {
      this.lists.push({title: "New List", tasks: []}); 
    },
    addItem() {
      this.currentList.tasks.push({task: "New Task", completed: false});
    },
    selectList(list) {
      this.currentList = list;
    },
  },
  mounted() {
    this.currentList = this.lists[0];
  }
})

app.mount('#app')