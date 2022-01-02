<template>
  <div class="todos-content">
    <div v-for="todo in filteredTodos" :key="todo.id">
      <TodoItem
        :todo="todo"
        @del-todo="$emit('del-todo', todo)"
        @edit-todo="$emit('edit-todo', todo)"
      />
    </div>
    <div class="d-flex flex-wrap justify-space-between align-center pa-5">
      <h3>{{ filteredTodos.length }} items remaining</h3>
      <div>
        <v-btn text @click="visibility = 'all'">All</v-btn>
        <v-btn text @click="visibility = 'active'">Active</v-btn>
        <v-btn text @click="visibility = 'completed'">Completed</v-btn>
      </div>
      <v-btn text @click="$emit('clear-complete')">Clear Complete</v-btn>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: [],
      default: [],
    },
  },
  data() {
    return {
      visibility: "all",
    };
  },
  computed: {
    filteredTodos() {
      if (this.visibility === "all") {
        return this.todos;
      } else if (this.visibility === "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.visibility === "completed") {
        return this.todos.filter((todo) => todo.completed);
      } else {
        return this.todos;
      }
    },
  },
};
</script>

<style scoped>
.todos-content {
  background-color: var(--v-grey-base);
  border-radius: 8px;
  box-shadow: var(--v-boxshadow-base);
}
</style>
