<template>
  <header class="text-center h-16 border-b border-gray-200">
    <Container>
      <h1>Header</h1>
    </Container>
  </header>
  <div class="min-h-[calc(100vh_-_64px)] flex flex-col">
    <main>
      <Container>
        <div class="max-w-3xl mx-auto py-20 space-y-5">
          <TodoForm @submitForm="handleFormValue" />
          <todoList
            :todoList="todoList"
            @removeTodo="handleRemove"
            @updateSelectedTodo="updateSelectedTodo"
          />
        </div>
      </Container>
    </main>

    <footer
      class="h-16 mt-auto border-t border-gray-200 flex items-center justify-center"
    >
      <Container>
        <p class="text-center">&copy;Copyright by StackBind</p>
      </Container>
    </footer>
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
import Container from "@/components/utilites/Container.vue";
let id = 0;
export default {
  name: "App",
  components: {
    TodoForm,
    TodoList,
    Container,
  },
  data() {
    return {
      todoText: "",
      todoList: [
        { id: id++, text: "Need to update the app", isDone: true },
        { id: id++, text: "Revision module", isDone: true },
        { id: id++, text: "Some Text", isDone: true },
        { id: id++, text: "Some Text", isDone: true },
      ],
      title: "This is Demo Title",
    };
  },
  methods: {
    handleFormValue(values) {
      this.todoList.push({
        id: id++,
        text: values.todoName,
        isDone: false,
      });
    },
    handleRemove(todo) {
      this.todoList = this.todoList.filter((el) => el != todo);
    },
    updateSelectedTodo({ todo, value }) {
      todo.text = value;
    },
  },
};
</script>
