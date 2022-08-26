<template>
  <ul>
    <div v-for="item in todoStore.items" :key="item">
      <TodoItem :item="item" />
    </div>
  </ul>
</template>

<script setup>
import { useTodoStore } from '@/store/TodoStore';
import TodoItem from './TodoItem.vue';
const todoStore = useTodoStore();
</script>

<style></style>
