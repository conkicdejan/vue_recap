import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
  state: () => {
    return {
      input: '',
      items: [],
      errors: [],
    };
  },
  actions: {
    addItem() {
      this.items.push({ title: this.input, done: false });
      this.input = '';
      this.clearError();
    },
    addError(error) {
      this.clearError();
      this.errors.push(error);
    },
    clearError() {
      this.errors = [];
    },
    setInput(input) {
      this.input = input;
    },
    deleteItem(i) {
      this.items = this.items.filter((item) => item !== i);
    },
    toggleComplete(item) {
      item.done = !item.done;
    },
  },
  getters: {
    countUncomplete() {
      return this.items.reduce(
        (count, item) => count + (item.done === false ? 1 : 0),
        0
      );
    },
  },
});
