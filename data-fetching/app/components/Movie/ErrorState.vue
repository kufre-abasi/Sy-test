<template>
  <div class="error-container">
    <div class="error-icon">⚠️</div>
    <h3>Oops! Something went wrong</h3>
    <p class="error-message">{{ message }}</p>
    <button @click="$emit('retry')" class="retry-button">Try Again</button>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "An error occurred while fetching data.",
  },
});

defineEmits(["retry"]);
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  min-height: 300px;
  text-align: center;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-container h3 {
  color: #d32f2f;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.error-message {
  color: #666;
  margin: 0 0 1.5rem 0;
  max-width: 500px;
}

.retry-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.retry-button:hover {
  background: #5568d3;
}
</style>
