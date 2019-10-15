<template>
  <div>
    <form>
      <label for="description">Activity</label>
      <input id="description" name="description" type="text" v-model="description">
      <button type="submit" @click.prevent="addTodoListItem">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoListAdd",
  data: function() {
    return {
      description: ""
    };
  },
  methods: {
    addTodoListItem: function() {
      const temporaryList = this.$store.state.items;
      const UUID = temporaryList.length + 1;

      this.$store.dispatch("addTodoTask", {
        name: this.description,
        id: UUID,
        isComplete: false
      });

      this.description = "";
    }
  }
};
</script>
