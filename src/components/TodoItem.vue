<template>
  <li class="item">
    <!-- Render taska sa isDone klasom (stilom) ako je done -->
    <h3 :class="{ isDone: item.done }">{{ item.title }}</h3>

    <!-- Toggle button complete/uncomplete -->
    <button @click="handleComplete">
      <span v-if="item.done">mark as uncomplete</span>
      <span v-else>mark as complete</span>
    </button>

    <!-- Delete button -->
    <button @click="handleDelete">delete</button>
  </li>
</template>

<script setup>
import { useTodoStore } from '@/store/TodoStore';
const todoStore = useTodoStore();

const { item } = defineProps(['item']);

// Toggle complete/uncomplete
const handleComplete = () => {
  todoStore.toggleComplete(item);
};

// Delete item form store
const handleDelete = () => {
  todoStore.deleteItem(item);
};
</script>

<style>
h3 {
  display: inline-block;
  margin: 10px;
}

li {
  list-style: none;
}

.isDone {
  color: gray;
  text-decoration: line-through;
}
</style>
