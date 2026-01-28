<template>
  <div class="movie-card">
    <div class="movie-poster">
      <img v-if="movie?.Poster" :src="movie?.Poster" :alt="movie?.Title" />
      <div v-else class="no-poster">
        <span>No Image</span>
      </div>
    </div>
    <div class="movie-info">
      <h3 class="movie-title">{{ movie?.Title }}</h3>
      <p class="movie-date">{{ formatDate(movie?.Year) }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const truncateOverview = (text) => {
  if (!text) return "No overview available.";
  return text.length > 150 ? text.substring(0, 150) + "..." : text;
};
</script>

<style scoped>
.movie-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.movie-poster {
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: #f0f0f0;
}

.movie-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-poster {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.2rem;
}

.movie-info {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  line-height: 1.3;
}

.movie-date {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.movie-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.star {
  font-size: 1rem;
}

.movie-overview {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
  flex: 1;
}
</style>
