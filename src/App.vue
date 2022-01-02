<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <div
      class="w-100 mb-16 d-flex align-center justify-center"
      :class="[
        this.$vuetify.theme.dark ? 'header__dark-bg' : 'header__light-bg',
      ]"
    >
      <div class="header__content">
        <div class="d-flex justify-space-between align-center my-14">
          <h2 class="text-h3 font-weight-bold f-family">Todo</h2>
          <div>
            <v-icon v-if="this.$vuetify.theme.dark" x-large @click="toggleIcon">
              mdi-white-balance-sunny
            </v-icon>
            <v-icon v-else x-large @click="toggleIcon"
              >mdi-moon-waxing-crescent</v-icon
            >
          </div>
        </div>
        <AddTodo @add-todo="addTodo" />
        <div class="mt-14 d-flex justify-end" v-if="this.todos.length > 0">
          <v-btn color="error" @click="deleteAll">Delete ALL</v-btn>
        </div>
      </div>
    </div>
    <div class="header__content mx-auto">
      <Todos
        v-if="this.todos.length > 0"
        :todos="todos"
        @del-todo="deleteTodo"
        @edit-todo="editTodo"
        @clear-complete="clearComplete"
      />
      <div class="text-center" v-else>
        <h1>You have no todos</h1>
      </div>
    </div>
  </v-app>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";
const STORAGE_KEY = "todo-storage-key";
const THEME_KEY = "todo-theme-key";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data: () => ({
    todos: [],
  }),
  mounted() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    this.$vuetify.theme.dark = JSON.parse(
      localStorage.getItem(THEME_KEY, JSON.stringify(this.$vuetify.theme.dark))
    );
  },
  methods: {
    saveList() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    toggleIcon() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(THEME_KEY, JSON.stringify(this.$vuetify.theme.dark));
    },
    deleteTodo(data) {
      console.log(data.id);
      this.todos = this.todos.filter((todo) => todo.id != data.id);
      this.saveList();
    },
    addTodo(newTodo) {
      // this.todos = [...this.todos, newTodo];
      this.todos.push(newTodo);
      this.saveList();
    },
    deleteAll() {
      this.todos = [];
      this.saveList();
    },
    editTodo(todo) {
      todo.title = todo.title.trim();
      this.saveList();
      if (!todo.title) {
        this.deleteTodo(todo);
      }
      console.log(123, todo);
    },
    clearComplete() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      this.saveList();
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
p {
  margin: 0px !important;
  padding: 0px;
}
.f-family {
  font-family: "Space Mono", monospace;
}
.header__dark-bg {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1640876763/todo/bg-desktop-dark_storsy.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
}
.header__light-bg {
  background: url("https://res.cloudinary.com/frozenchicken/image/upload/v1640876762/todo/bg-desktop-light_tbfqzm.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 450px;
}
.header__content {
  max-width: 900px;
  width: 100%;
}
@media (max-width: 930px) {
  .header__content {
    max-width: 650px;
    width: 100%;
  }
}
@media (max-width: 430px) {
  .header__content {
    max-width: 340px;
    width: 100%;
  }
}
@media (max-width: 320px) {
  .header__content {
    max-width: 300px;
    width: 100%;
  }
}
</style>
