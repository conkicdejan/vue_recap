<template>
  <div class="home">
    <h1>To do list</h1>

    <!-- Show number of remaining tasks -->
    <h3 v-if="countUncomplete">
      You have {{ countUncomplete }}
      {{ countUncomplete > 1 ? 'tasks' : 'task' }} to do
    </h3>
    <h3 v-else>All done!</h3>

    <!-- Simple form with one input field and submit button -->
    <form @submit.prevent="handleSubmit">
      <label for="input">Enter new task</label>
      <input type="text" id="input" name="input" v-model="input" />
      <button type="submit">Add task</button>

      <!-- Show error if any -->
      <div v-for="error in errors" :key="error">
        <p class="error" v-if="error.input">
          {{ error.input }}
        </p>
      </div>
    </form>

    <TodoList
      :items="items"
      @toggleComplete="handleToggleComplete"
      @itemDelete="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed } from 'vue';
import TodoList from '@/components/TodoList.vue';

components: {
  TodoList;
}
// Initail state
const input = ref('');
const items = ref([]);
const errors = ref([]);

// Submit form, if there is error -> set error property, if there is no error -> add task to items property
const handleSubmit = (e) => {
  errors.value = [];
  if (input.value.length === 0) {
    errors.value.push({ input: 'Please enter some text' });
    return;
  }
  items.value.push({ title: input.value, done: false });
  input.value = '';
};

// Delete task handler
const handleDelete = (i) => {
  items.value = items.value.filter((item) => item !== i);
};

// Toggle handler complete/uncomplete
const handleToggleComplete = (item) => {
  item.done = !item.done;
};

// Count uncompleted tasks (computed property)
const countUncomplete = computed(() => {
  console.log(items);
  return items.value.reduce(
    (count, item) => count + (item.done === false ? 1 : 0),
    0
  );
});
</script>

<style>
.error {
  color: red;
  margin: 5px 0;
}
</style>
