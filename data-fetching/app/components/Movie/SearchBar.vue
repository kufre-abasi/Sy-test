<template>
  <div class="search-bar">
    <input
      v-model="query"
      type="text"
      placeholder="Search for movies..."
      @keyup.enter="handleSearch"
      class="search-input"
    />
    <button @click="handleSearch" class="search-button">Search</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);
const query = ref("");

const handleSearch = () => {
  if (query.value.trim()) {
    emit("search", query.value.trim());
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 0.5rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.search-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
}

.search-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.search-button:hover {
  background: #5568d3;
}

.search-button:active {
  transform: scale(0.98);
}
</style>
