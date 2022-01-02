<template>
  <div
    class="todo-item px-5 mb-3 py-5"
    :class="{ editing: todo === editedTodo }"
  >
    <div class="d-flex justify-space-between align-center add">
      <div class="d-flex align-center">
        <v-checkbox v-model="todo.completed" class="mr-5" color="orange" />
        <h2 :class="{ 'is-complete': todo.completed }">
          {{ todo.title }}
        </h2>
      </div>
      <div :class="{ 'd-none': todo.completed }">
        <v-btn @click="editTodo(todo)" text icon color="warning">
          <v-icon> mdi-square-edit-outline </v-icon>
        </v-btn>
        <v-btn @click="$emit('del-todo', todo.id)" text icon color="error">
          <v-icon> mdi-delete-outline </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="edit">
      <v-text-field
        @keyup.enter="doneEdit(todo)"
        @blur="doneEdit(todo)"
        filled
        v-model="todo.title"
        solo
        height="65"
        background-color="grey"
        hide-details="true"
        color="grey"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: [],
    },
  },
  data() {
    return {
      editedTodo: false,
    };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      this.$emit("edit-todo", todo);
    },
    editTodo(todo) {
      this.editedTodo = todo;
    },
  },
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
  color: grey;
}
.todo-item {
  border-bottom: 0.5px #b3acac solid;
}
.edit {
  display: none;
}
.add {
  display: block;
}
.editing .edit {
  display: block;
}
.editing .add {
  display: none !important;
}
</style>
