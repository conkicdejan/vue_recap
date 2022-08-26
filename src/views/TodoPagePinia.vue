<template>
  <div class="home">
    <h1>To do list</h1>

    <!-- Ispisuje koliko je jos taskova ostalo da se uradi -->
    <h3 v-if="todoStore.countUncomplete">
      You have {{ todoStore.countUncomplete }}
      {{ todoStore.countUncomplete > 1 ? 'tasks' : 'task' }} to do
    </h3>
    <h3 v-else>All done!</h3>

    <!-- Jednostavna forma sa jednim text input poljem i add button -->
    <form @submit.prevent="handleSubmit">
      <label for="input">Enter new task</label>
      <input
        type="text"
        id="input"
        name="input"
        v-model="todoStore.input"
        @keyup="handleInput"
      />
      <button type="submit">Add task</button>

      <!-- Ispisuje gresku za input polje ako greska postoji u state -->
      <div v-for="error in todoStore.errors" :key="error">
        <p class="error" v-if="error.input">
          {{ error.input }}
        </p>
      </div>
    </form>

    <TodoList />
  </div>
</template>

<script setup>
import { useTodoStore } from '@/store/TodoStore';
import TodoList from '@/components/TodoList.vue';
const todoStore = useTodoStore();

// Setuje vrednost input polja u state
const handleInput = () => {
  todoStore.setInput(input.value);
};

//Submit forme, ako je input empty setuje error u state, ako je input ok dodaje task u items niz u state
const handleSubmit = (e) => {
  if (todoStore.input.length === 0) {
    todoStore.addError({ input: 'Please enter some text' });
    return;
  }
  todoStore.addItem();
};
</script>

<style>
.error {
  color: red;
  margin: 5px 0;
}
</style>
