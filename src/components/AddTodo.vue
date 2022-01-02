<template>
  <div class="">
    <v-text-field
      placeholder="Add Todo ..."
      solo
      height="65"
      background-color="grey"
      hide-details="true"
      color="grey "
      v-model="title"
      @keyup.enter="addTodo"
    ></v-text-field>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.title === "") {
        return;
      }
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
  },
};
</script>

<style></style>
