<template>
  <ul>
    <div v-for="item in props.items" :key="item">
      <TodoItem
        :item="item"
        @toggleComplete="handleToggleComplete"
        @itemDelete="handleDelete"
      />
    </div>
  </ul>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import TodoItem from './TodoItem.vue';
const emit = defineEmits(['itemDelete', 'toggleComplete']);

components: {
  TodoItem;
}

// Receiving props
const props = defineProps(['items']);

// Emit delete event
const handleDelete = (item) => {
  emit('itemDelete', item);
};

// Emit toogle complete/uncomplete event
const handleToggleComplete = (item) => {
  emit('toggleComplete', item);
};
</script>

<style></style>
