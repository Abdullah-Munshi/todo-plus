<template>
  <div>
    <ul class="space-y-5">
      <li
        v-for="todo in todoList"
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
          <button @click="updateTodo(todo)">
            <PencilSquareIcon
              class="h-6 w-6 text-gray-700 hover:text-blue-500"
            />
          </button>
          <button @click="$emit('removeTodo', todo)">
            <TrashIcon class="h-6 w-6 text-gray-700 hover:text-blue-500" />
          </button>
        </div>
      </li>
    </ul>
    <UpdateTodoModal
      v-if="isModalOpen && selectedTodo"
      :selectedTodo="selectedTodo"
      :isModalOpen="isModalOpen"
      @close-modal="closeModal"
      @updateSelectedTodo="$emit('updateSelectedTodo', $event)"
    />
  </div>
</template>
<script>
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import UpdateTodoModal from "@/components/UpdateTodoModal.vue";
export default {
  name: "Todo List",
  components: {
    TrashIcon,
    PencilSquareIcon,
    UpdateTodoModal,
  },
  props: {
    todoList: Array,
    showModal: Boolean,
    currentTodo: Object,
  },
  data() {
    return {
      isDone: "line-through",
      isModalOpen: false,
      selectedTodo: null,
    };
  },
  methods: {
    updateTodo(todo) {
      this.selectedTodo = todo;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
