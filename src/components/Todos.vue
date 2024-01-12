<template>
  <ul class="space-y-5">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="grid grid-cols-[20px_auto] gap-4 relative"
    >
      <input
        v-model="todo.isDone"
        type="checkbox"
        class="border-gray-200 rounded-sm w-5 h-5 mt-1"
      />
      <p
        :class="{ 'line-through': todo.isDone }"
        class="text-black text-xl font-normal m-0 leading-tight"
      >
        {{ todo.text }}
      </p>
      <div class="absolute right-0 top-0 z-10 space-x-4">
        <button @click="editTodo(todo)">
          <PencilSquareIcon class="h-6 w-6 text-gray-700 hover:text-blue-500" />
        </button>
        <button @click="removeTodo(todo)">
          <TrashIcon class="h-6 w-6 text-gray-700 hover:text-blue-500" />
        </button>
      </div>
    </li>
  </ul>
  <EditTodo
    v-if="showModal && currentTodo"
    :currentTodo="currentTodo"
    :showModal="showModal"
    @closeUpdateModal="$emit('closeUpdateModal', $event)"
  />
</template>

<script>
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import EditTodo from "@/components/UpdateTodoModal.vue";
export default {
  components: {
    TrashIcon,
    PencilSquareIcon,
    EditTodo,
  },
  props: {
    todos: Array,
    showModal: Boolean,
    currentTodo: Object,
  },
  data() {
    return {
      isDone: "line-through",
    };
  },
  methods: {
    removeTodo(todo) {
      this.$emit("removeTodo", todo);
    },
    editTodo(todo) {
      this.$emit("editTodo", todo);
    },
  },
};
</script>

<style>
.h-6 {
  width: 15px;
  height: 15px;
  color: red;
}
</style>
