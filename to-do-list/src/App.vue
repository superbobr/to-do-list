<script setup>
import { ref } from 'vue'
const newItem = ref('')
const items = ref([
  { id: 1, text: 'Хлеб' },
  { id: 2, text: 'Молоко' }
])

const addNewItem = () => {
  const text = newItem.value.trim()
  if (text) {
    items.value.push({
      id: Date.now(),
      text
    })
  }
  newItem.value = ''
}

const removeItem = (id) => items.value = items.value.filter(item => item.id !== id)

</script>

<template>
  <main>
  <h1>Список покупок</h1>
  <input v-model="newItem">
  <button @click="addNewItem">Добавить</button>
  <p v-if="items.length === 0">Список пуст</p>
  <ul>
    <li v-for="item in items" :key="item.id"">{{ item.text }}
      <button @click="removeItem(item.id)">Удалить</button>
    </li>
  </ul>
  <p>Всего: {{ items.length }}</p>
  </main>
</template>

<style scoped>

</style>
