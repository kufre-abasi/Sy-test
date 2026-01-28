<template>
  <div class="container">
    <header class="text-white header">
      <h1 class="!text-white">🎬 Movie Search</h1>
      <p class="subtitle">Discover your next favorite movie</p>
    </header>

    <SearchBar @search="handleSearch" />

    <div class="controls">
      <button v-if="movieStore.searchQuery" @click="loadPopular" class="secondary-button">
        Show Popular Movies
      </button>
    </div>

    <!-- Loading State -->
    <LoadingState v-if="movieStore.isloading" />

    <!-- Error State -->
    <ErrorState
      v-else-if="movieStore.hasError"
      :message="movieStore.error"
      @retry="retryLastAction"
    />

    <!-- Empty State -->
    <EmptyState
      v-else-if="movieStore.isEmpty"
      title="No movies found"
      message="Try searching for something else or check your spelling."
    />

    <!-- Success State - Movie Grid -->
    <div v-else-if="!movieStore.hide" class="movie-grid">
      <MovieCard
        v-for="movie in movieStore.filteredMovies"
        :key="movie.imdbID"
        :movie="movie"
      />
    </div>

    <!-- Initial State -->
    <div v-else class="welcome-state !text-white">
      <div class="welcome-icon">🍿</div>
      <h2>Welcome to Movie Search</h2>
      <p>Search for your favorite movies or browse popular titles below</p>
      <button @click="loadPopular" class="primary-button">Browse Popular Movies</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMovieStore } from "~/store/movie";

const movieStore = useMovieStore();

// A reactive ref to keep track of the last action for the "retry" functionality.
const lastAction = ref(null);

const handleSearch = (query) => {
  // Set the last action for potential retry and call the store.
  lastAction.value = { type: "search", query };
  // This is a cleaner API than mutating store state from the component.
  // We assume the store exposes a `searchMovies` action.
  movieStore.searchMovies(query);
};

const loadPopular = () => {
  // Set the last action for potential retry and call the store.
  lastAction.value = { type: "popular" };
  movieStore.getPopularMovies();
};

const retryLastAction = () => {
  if (!lastAction.value) {
    // Fallback to loading popular movies if no action has been recorded.
    loadPopular();
    return;
  }

  // Re-run the last failed action by calling the appropriate store method.
  if (lastAction.value.type === "search") {
    movieStore.searchMovies(lastAction.value.query);
  } else if (lastAction.value.type === "popular") {
    movieStore.getPopularMovies();
  }
};

// On initial mount, load popular movies if the list is empty.
onMounted(() => {
  // This check prevents re-fetching if data already exists (e.g., via <keep-alive>).
  if (movieStore.filteredMovies.length === 0 && !movieStore.isloading) {
    loadPopular();
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  margin: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.results-info {
  font-size: 0.95rem;
}

.secondary-button {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.secondary-button:hover {
  background: #667eea;
  color: white;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.welcome-state {
  text-align: center;
  padding: 4rem 2rem;
}

.welcome-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.welcome-state h2 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
}

.welcome-state p {
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
}

.primary-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .movie-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>
