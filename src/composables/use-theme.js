import { ref, onMounted } from 'vue';
const isDark = ref(false);
function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
}
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});
export function useTheme() {
  return { isDark, toggleTheme };
}
