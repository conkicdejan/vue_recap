<template>
  <li class="item">
    <!-- Show task and apply style depend on complete/uncomplete -->
    <h3 :class="{ isDone: props.item.done }">{{ props.item.title }}</h3>

    <!-- Toggle button complete/uncomplete & emit -->
    <button @click="$emit('toggleComplete', props.item)">
      <span v-if="props.item.done">mark as uncomplete</span>
      <span v-else>mark as complete</span>
    </button>

    <!-- Delete button & emit -->
    <button @click="$emit('itemDelete', props.item)">delete</button>
  </li>
</template>

<script setup>
// Receiving props
const props = defineProps(['item']);
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
