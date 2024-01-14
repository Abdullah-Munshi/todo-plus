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
          <TodoForm />
          <todoList />
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
import { mapState } from "pinia";
import { useTodo } from "@/stores/Stores";

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList,
    Container,
  },
  computed: {
    ...mapState(useTodo, ["todoList"]),
  },
};
</script>
