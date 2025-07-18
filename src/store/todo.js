import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false,
    })
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  }
})