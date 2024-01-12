<template>
  <form
    class="grid grid-cols-[1.5fr_1fr_150px] gap-4 items-end"
    @submit.prevent="addTodo"
  >
    <div>
      <label class="block mb-2" for="">Todo Name</label>
      <input
        type="text"
        v-model="todoName"
        class="px-4 w-full h-12 rounded-md border border-gray-300 outline-none focus:border-sky-500"
      />
    </div>
    <div>
      <label class="block mb-2" for="">Due Date</label>
      <input
        type="date"
        name=""
        id=""
        class="px-4 w-full h-12 rounded-md border border-gray-300 outline-none focus:border-sky-500"
      />
    </div>
    <button class="bg-primary block h-12 rounded-md text-white font-bold">
      Add
    </button>
  </form>
</template>

<script>
import { useToast } from "vue-toast-notification";
const toast = useToast();
export default {
  name: "Todo Form",
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
