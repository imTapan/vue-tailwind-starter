<template>
  <div class="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded shadow">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Todo List</h1>
    <form @submit.prevent="addTodo" class="mb-4 flex gap-2">
      <input
        v-model="newTodo"
        class="border rounded px-2 py-1 flex-1 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        placeholder="Add a todo..."
      />
      <button type="submit" class="bg-blue-500 dark:bg-blue-700 text-white px-4 py-1 rounded">
        Add
      </button>
    </form>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between mb-2"
      >
        <span :class="[todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-100']">
          {{ todo.text }}
        </span>
        <div class="flex gap-2">
          <button @click="toggleTodo(todo.id)" class="text-green-500 dark:text-green-400">
            {{ todo.completed ? "Undo" : "Done" }}
          </button>
          <button @click="removeTodo(todo.id)" class="text-red-500 dark:text-red-400">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "@/store/todo";

const todoStore = useTodoStore();
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = "";
  }
};

const toggleTodo = (id) => {
  todoStore.toggleTodo(id);
};

const removeTodo = (id) => {
  todoStore.removeTodo(id);
};

const todos = computed(() => todoStore.todos);
</script>
