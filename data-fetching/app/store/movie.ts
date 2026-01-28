import { defineStore } from "pinia";
import axios from "axios";

// Define the shape of a movie object from the OMDb API for better type safety.
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Genre?: string; // Genre is not always present in search results
  imdbRating?: string; // Rating is not in search results, only in detail fetch
}

// Define the shape of the store's state.
interface MovieStoreState {
  movies: Movie[];
  selectedMovie: Movie | null;
  isloading: boolean;
  error: string | null;
  searchQuery: string;
  totalResults: number;
  hide: boolean; // Used to control the initial "welcome" screen visibility
  // Filter and sort state
  selectedGenre: string;
  sortOrder: "title" | "year"; // OMDb search results don't include rating
  movieYear: string;
  movieType: string;
}

export const useMovieStore = defineStore("movie", {
  state: (): MovieStoreState => ({
    movies: [],
    selectedMovie: null,
    isloading: false,
    error: null,
    searchQuery: "",
    totalResults: 0,
    hide: true, // Start with the welcome screen visible (grid hidden)
    selectedGenre: "",
    sortOrder: "title",
    movieYear: "",
    movieType: "",
  }),

  actions: {
    /**
     * A centralized private action to handle fetching movies from the OMDb API.
     * This reduces code duplication for search and popular movies logic.
     */
    async _fetchMovies(params: { s: string; i?: undefined }) {
      this.isloading = true;
      this.error = null;
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: "9d0245bc", // It's better to store this in an environment variable
            ...params,
          },
        });

        if (response.data.Response === "False") {
          // OMDb returns a 200 OK with an error message in the body
          throw new Error(response.data.Error);
        }

        this.movies = response.data.Search || [];
        this.totalResults = parseInt(response.data.totalResults, 10) || 0;
        this.hide = false; // Movies are loaded, so hide the welcome screen
      } catch (error: any) {
        this.error =
          error.message || "An unexpected error occurred. Please try again.";
        this.movies = [];
        this.totalResults = 0;
      } finally {
        this.isloading = false;
      }
    },

    /**
     * Searches for movies based on a user-provided query.
     * This action is called from the SearchBar component.
     */
    async searchMovies(query: string) {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        // If the query is empty, you might want to reset to the popular list or clear results.
        // Here, we clear the results and show the welcome screen again.
        this.movies = [];
        this.totalResults = 0;
        this.searchQuery = "";
        this.hide = true;
        return;
      }
      this.searchQuery = trimmedQuery;
      await this._fetchMovies({ s: trimmedQuery });
    },

    /**
     * Fetches a predefined list of "popular" movies.
     * OMDb API doesn't have a "popular" endpoint, so we search for a popular term.
     */
    async getPopularMovies() {
      this.searchQuery = ""; // Clear search query when showing popular movies
      await this._fetchMovies({ s: "star wars" }); // Using a popular franchise as an example
    },

    /**
     * Fetches the detailed information for a single movie by its ID.
     */
    async getMovieDetails(movieId: string) {
      this.isloading = true; // Use the main loading flag for simplicity
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            i: movieId,
            apikey: "9d0245bc",
            plot: "full", // Get the full plot
          },
        });
        if (response.data.Response === "False") {
          throw new Error(response.data.Error);
        }
        this.selectedMovie = response.data;
      } catch (error: any) {
        console.error("Error fetching movie details:", error);
        this.error = error.message; // Also set the main error state
        this.selectedMovie = null;
      } finally {
        this.isloading = false;
      }
    },

    // --- State Update Actions for Filters & Sorting ---
    setSortOrder(order: MovieStoreState["sortOrder"]) {
      this.sortOrder = order;
    },
    setMovieYear(year: string) {
      this.movieYear = year;
    },
  },

  getters: {
    // --- UI State Getters ---
    hasError: (state): boolean => !!state.error,
    isEmpty: (state): boolean =>
      !state.isloading && state.movies.length === 0 && !!state.searchQuery,

    /**
     * The primary getter for displaying movies. It handles filtering and sorting
     * in a pure, reactive way.
     */
    filteredMovies: (state): Movie[] => {
      // Create a new array to avoid mutating the original state
      const movies = [...state.movies];

      // Note: OMDb search results don't include Genre. This filter will only work
      // if you fetch details for each movie, which would be slow.
      // This is left here as an example if the data source changes.

      // Apply sorting
      return movies.sort((a, b) => {
        switch (state.sortOrder) {
          case "year":
            // Handle cases where year might be a range like "2009–2011"
            return parseInt(b.Year, 10) - parseInt(a.Year, 10);
          case "title":
          default:
            return a.Title.localeCompare(b.Title);
        }
      });
    },
    // This getter is not used by the main component but could be useful for a filter dropdown.
    genres: (state): string[] => {
      const genres = new Set<string>();
      state.movies.forEach((movie) => {
        if (movie.Genre) {
          movie.Genre.split(", ").forEach((genre) => genres.add(genre));
        }
      });
      return Array.from(genres).sort();
    },
  },
});
