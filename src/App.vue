<script>
import Todos from "./components/Todos.vue";
import TodoForm from "@/components/TodoForm.vue";
import Container from "@/components/utilites/Container.vue";
let id = 0;
export default {
  components: {
    TodoForm,
    Todos,
    Container,
  },
  data() {
    return {
      todoText: "",
      todos: [
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
      this.todos.push({
        id: id++,
        text: values.todoName,
        isDone: false,
      });
    },

    handleRemove(todo) {
      this.todos = this.todos.filter((el) => el != todo);
    },
  },
};
</script>

<template>
  <header class="text-center h-16 border-b border-gray-200">
    <Container>
      <h1>Header</h1>
    </Container>
  </header>
  <div class="min-h-[calc(100vh_-_64px)] flex flex-col">
    <main>
      <Container>
        <div class="max-w-3xl mx-auto py-20">
          <TodoForm @submitForm="handleFormValue" />
          <Todos :todos="todos" @removeTodo="handleRemove" />
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

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
