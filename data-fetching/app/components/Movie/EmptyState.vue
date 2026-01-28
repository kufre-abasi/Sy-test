<template>
  <div class="empty-container">
    <div class="empty-icon">🎬</div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "No movies found",
  },
  message: {
    type: String,
    default: "Try searching for something else or browse popular movies.",
  },
});
</script>

<style scoped>
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  min-height: 300px;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-container h3 {
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.empty-container p {
  color: #666;
  margin: 0;
  max-width: 400px;
}
</style>
