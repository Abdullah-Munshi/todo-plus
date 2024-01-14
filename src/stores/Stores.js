import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
  state: () => {
    return {
      todoList: [
        { id: 1, text: "Need to update the app", isDone: true },
        { id: 2, text: "Revision module", isDone: true },
        { id: 3, text: "Some Text", isDone: true },
        { id: 4, text: "Some Text", isDone: true },
      ],
      todoName: "",
      isDone: "line-through",
      isModalOpen: false,
      selectedTodo: null,
    };
  },

  actions: {
    handleFormValue(values) {
      this.todoList.push({
        id: Math.random() * 4,
        text: values.todoName,
        isDone: false,
      });
    },
    deleteTodo(todo) {
      this.todoList = this.todoList.filter((el) => el != todo);
    },
    updateSelectedTodo({ todo, value }) {
      todo.text = value;
    },

    updateTodo(todo) {
      this.selectedTodo = todo;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
