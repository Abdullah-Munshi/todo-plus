<template>
  <TransitionRoot appear :show="isModalOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h4"
                class="text-lg font-medium leading-6 text-gray-900 text-center"
              >
                Update your Todo
              </DialogTitle>
              <div class="mt-4">
                <input
                  type="text"
                  v-model="inputValue"
                  class="w-full h-12 rounded-md border border-gray-300 px-4 focus:border-sky-500 outline-none"
                />
              </div>

              <div class="mt-4 space-x-4 flex justify-end">
                <button
                  @click="$emit('closeModal')"
                  class="inline-block px-4 py-3 bg-primary text-white font-semibold rounded-md leading-tight"
                >
                  Cancel
                </button>
                <button
                  @click="updateTodo"
                  class="inline-block px-4 py-3 bg-primary text-white font-semibold rounded-md leading-tight"
                >
                  Update
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
export default {
  name: "Todo Update Modal",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  props: ["isModalOpen", "selectedTodo"],
  data() {
    return {
      inputValue: this.selectedTodo.text,
    };
  },
  methods: {
    updateTodo() {
      this.$emit("updateSelectedTodo", {
        todo: this.selectedTodo,
        value: this.inputValue,
      });
      this.$emit("closeModal");
    },
  },
};
</script>
