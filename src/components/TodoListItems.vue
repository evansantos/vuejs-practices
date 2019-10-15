<template>
  <div>
    <div>
      <h1>// @TODO</h1>
      <ul>
        <li :key="item.id" v-for="item in getItems">
          <input type="checkbox" value="true" v-model="item.isComplete">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div style="margin-bottom: 16px;">
      <input
        id="uncompleted"
        name="uncompleted"
        type="radio"
        value="incompleted"
        v-model="tasksType"
        @change="filterTasks(tasksType)"
      >
      <label for="uncompleted">uncompleted</label>
      <input
        id="completed"
        name="completed"
        type="radio"
        value="completed"
        v-model="tasksType"
        @change="filterTasks(tasksType)"
      >
      <label for="completed">completed</label>
      <input
        id="all"
        name="all"
        type="radio"
        value="all"
        v-model="tasksType"
        @change="filterTasks(tasksType)"
      >
      <label for="all">All labels</label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoListItems",
  data: function() {
    return {
      tasksType: "all"
    };
  },
  methods: mapActions(["filterTasks"]),
  computed: mapGetters(["getItems"])
};
</script>