<script>
import { useToast } from "vue-toast-notification";
const toast = useToast();
export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.todoName) {
        toast.error("Fields must be filled!");
        return;
      } else if (this.todoName) {
        this.$emit("submitForm", { todoName: this.todoName });
        this.todoName = "";
        toast.success("Todo is submitted Successfully!");
      }
    },
  },
};
</script>
<template>
  <form class="grid grid-cols-[auto_150px] gap-4" @submit.prevent="addTodo">
    <input
      type="text"
      v-model="todoName"
      class="w-full h-12 rounded-md border border-gray-300"
    />
    <button>Add</button>
  </form>
</template>
