# Movie Search App - Nuxt 3

A modern movie search application built with Nuxt 3, featuring data fetching from the **OMDb (Open Movie Database) API**. It demonstrates a robust state management pattern using Pinia to handle loading, error, empty, and success states.

## 📋 Features

- 🔍 **Movie Search**: Search for movies by title
- 🎬 **Popular Movies**: Browse a pre-defined list of popular movies on initial load
- 📊 **State Management**: Proper handling of loading, error, and empty states
- 🔄 **Retry Functionality**: A "Retry" button appears on error, allowing the user to re-run the last failed action (search or popular movies).
- 🎨 **Responsive Design**: Mobile-friendly interface
- ⚡ **Fast Performance**: Built with Nuxt 3 and optimized data fetching

## 🛠️ Technologies Used

- **Nuxt 3**: The Intuitive Vue Framework
- **Pinia**: State management for Vue
- **Axios**: HTTP client for API calls
- **OMDb API**: The Open Movie Database REST API

## 📁 Project Structure

```
movie-search-app/
├── assets/
│   └── css/
│       └── main.css          # Global styles
├── components/
│   ├── MovieCard.vue         # Individual movie display
│   ├── SearchBar.vue         # Search input component
│   ├── LoadingState.vue      # Loading spinner
│   ├── ErrorState.vue        # Error handling UI
│   └── EmptyState.vue        # No results UI
├── pages/
│   └── index.vue             # Main page
├── stores/
│   └── movie.js              # Pinia store for movie data
├── app.vue                   # Root component
├── nuxt.config.ts            # Nuxt configuration
└── package.json              # Dependencies
```

## 🎯 Key Design Decisions

### 1. **State Management with Pinia**

- **Why Pinia?**: Official state management library for Vue 3, with better TypeScript support and simpler API than Vuex
- **Store Structure**: Centralized movie state with clear getters for different UI states
- **Benefits**:
  - Single source of truth for movie data
  - Reusable state logic across components
  - Clear separation of concerns

### 2. **API Integration with Axios**

- **Why Axios?**:
  - Promise-based HTTP client
  - Better error handling than native fetch
  - Request/response interceptors capability
  - Automatic JSON transformation
- **Implementation**: Used in Pinia actions for clean separation from components

### 3. **State Handling Strategy**

#### **Loading State**

- Displayed during API calls
- Visual spinner with message
- Prevents interaction during data fetch
- Implementation: Boolean flag in store (`loading: true/false`)

#### **Error State**

- Catches network errors, API errors, and timeouts
- User-friendly error messages
- "Try Again" button for retry functionality
- Stores last action for smart retry
- Implementation: Error object in store with null for no error

#### **Empty State**

- Shown when search returns no results
- Friendly message encouraging alternative actions
- Clear distinction from error state
- Implementation: Computed getter checking `movies.length === 0 && searchQuery !== ''`

#### **Success State**

- Responsive grid layout for movie cards
- Displays results count
- Smooth hover animations

### 4. **Component Architecture**

#### **Atomic Components**

- **MovieCard**: Self-contained movie display with poster, title, rating, and overview
- **SearchBar**: Reusable search input with enter key support
- **LoadingState**: Generic loading spinner
- **ErrorState**: Reusable error display with retry action
- **EmptyState**: Customizable empty state with props

#### **Smart vs Presentational**

- **Smart**: `pages/index.vue` - handles logic and state
- **Presentational**: All components - receive props, emit events

### 5. **User Experience Decisions**

- **Auto-load Popular Movies**: Shows content immediately on page load
- **Search on Enter**: Keyboard accessibility
- **Clear Visual Feedback**: Different states are visually distinct
- **Retry Mechanism**: Smart retry that remembers last action (search vs popular)
- **Results Count**: Shows total results for context
- **Responsive Grid**: Adapts to screen size (4 columns → 2 columns → 1 column)

### 6. **Error Handling**

```javascript
// Multi-layered error handling:
try {
  const response = await axios.get(...)
  // Success path
} catch (err) {
  // API error messages
  this.error = err.response?.data?.status_message ||
               'Failed to fetch movies. Please try again.'

  // Console logging for debugging
  console.error('Error fetching movies:', err)
}
```

### 7. **API Choice: TMDB**

- **Why TMDB?**:
  - Free tier available
  - Comprehensive movie database
  - Well-documented REST API
  - High-quality poster images
  - No CORS issues

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone or download the project**

2. **Install dependencies**

```bash
npm install
```

3. **Get TMDB API Key**
   - Visit https://www.themoviedb.org/settings/api
   - Create a free account
   - Request an API key
   - Copy your API key

4. **Configure Environment**

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```
NUXT_PUBLIC_API_KEY=your_actual_api_key_here
```

5. **Run Development Server**

```bash
npm run dev
```

6. **Open Browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run generate # Generate static site
npm run preview  # Preview production build
```

## 🎨 Features Demonstrated

### ✅ Data Fetching

- [x] Axios integration for HTTP requests
- [x] API endpoint configuration in Nuxt config
- [x] Error handling with try-catch
- [x] Response data processing

### ✅ Loading State

- [x] Loading flag in store
- [x] Loading component with spinner
- [x] Disabled interactions during loading
- [x] Loading message display

### ✅ Error State

- [x] Error capture and storage
- [x] User-friendly error messages
- [x] Retry functionality
- [x] Error component with styling

### ✅ Empty State

- [x] Detection of no results
- [x] Custom empty state component
- [x] Alternative action suggestions
- [x] Distinct from error state

### ✅ State Management (Pinia)

- [x] Centralized store
- [x] State mutations via actions
- [x] Computed getters for UI states
- [x] Store modularity

### ✅ Additional Features

- [x] Responsive design
- [x] Search functionality
- [x] Popular movies endpoint
- [x] Movie card components
- [x] Clean, modern UI

## 🔧 Configuration Notes

### Nuxt Config Decisions

```javascript
runtimeConfig: {
  public: {
    apiBaseUrl: 'https://api.themoviedb.org/3',
    apiKey: process.env.NUXT_PUBLIC_API_KEY
  }
}
```

- Public runtime config for client-side API access
- Environment variables for security
- Base URL configuration for easy endpoint changes

### Pinia Store Pattern

```javascript
state: () => ({
  movies: [],
  loading: false,
  error: null,
  // ... other state
});
```

- Immutable state updates through actions
- Getters for computed state logic
- Clear state initialization

## 🎓 Learning Outcomes

This project demonstrates:

1. **Modern Vue.js Development**: Composition API, component architecture
2. **State Management**: Pinia store patterns and best practices
3. **API Integration**: Axios usage, error handling, environment configuration
4. **User Experience**: Comprehensive state handling for better UX
5. **Code Organization**: Clean component structure and separation of concerns

## 🐛 Troubleshooting

### API Key Issues

- Ensure your TMDB API key is valid
- Check that `.env` file is in root directory
- Restart dev server after adding API key

### CORS Errors

- TMDB API should not have CORS issues
- If issues occur, check API key validity

### No Results

- Try different search terms
- Check network tab for API errors
- Verify API key is working

## 📝 Future Enhancements

Potential improvements:

- [ ] Pagination for search results
- [ ] Movie detail page
- [ ] Favorite movies functionality
- [ ] Filter by genre, year, rating
- [ ] Sort options
- [ ] Infinite scroll
- [ ] Movie trailers integration
- [ ] Server-side rendering optimization

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Nuxt 4](https://nuxt.com/)
- State management by [Pinia](https://pinia.vuejs.org/)

---

**Note**: This application requires a valid TMDB API key to function. The API key in the code is a placeholder and must be replaced with your own key.
