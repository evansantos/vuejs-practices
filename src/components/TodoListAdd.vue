<template>
  <div>
    <form>
      <label for="description">Activity</label>
      <input id="description" name="description" type="text" v-model="description">
      <button type="submit" @click.prevent="addTodoTask(description)">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoListAdd",
  data: function() {
    return {
      description: ""
    };
  },
  methods: mapActions(["addTodoTask"])
};
</script>
