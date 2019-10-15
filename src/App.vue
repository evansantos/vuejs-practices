<template>
  <div id="app">
    <TodoListAdd></TodoListAdd>
    <TodoListItems></TodoListItems>
  </div>
</template>

<script>
import TodoListAdd from "@/components/TodoListAdd";
import TodoListItems from "@/components/TodoListItems";

export default {
  name: "App",
  components: {
    TodoListAdd,
    TodoListItems
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
