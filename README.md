# 🎬 IMDB CLONE OMDB

This is a React-based movie search application that allows users to search for movies, view detailed movie information, and save their favorite movies. It utilizes the OMDB API to fetch movie data and provides an intuitive, user-friendly interface for exploring movies.

https://drive.google.com/file/d/1buuRxmKUCOfCsiXXkLVITUnEhp2Wrh1C/view?usp=sharing



## Features

- **Search Movies**: Users can search for movies by title.
- **View Movie Details**: Click on a movie to view detailed information such as the year of release, poster, and more.
- **Favorite Movies**: Users can save their favorite movies in the local storage for later viewing.
- **Responsive Design**: The application is mobile-friendly, providing a smooth user experience across all devices.





## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation between pages.
- **Bootstrap**: For responsive design and UI components.
- **Axios**: For making API requests.
- **OMDB API**: Public API to fetch movie data.
- **Local Storage**: For saving and retrieving favorite movies.





## App Structure

### Pages

1. **Home Page** (`/`): 
   - Users can search for movies by typing into the search bar.
   - The app fetches movie data from the OMDB API based on the search query.
   - Movies are displayed in a grid format with movie posters, titles, and release years.
   - Users can click on a movie card to view detailed information on the Movie Page.

2. **Movie Details Page** (`/movie/:id`):
   - Displays detailed information for a selected movie, including title, plot, year, and poster.
   - Users can add the movie to their favorites from this page.

3. **Favorites Page** (`/favorites`):
   - Displays a list of the user's favorite movies stored in the local storage.
   - Users can remove movies from their favorites list.





### Functionalities

- **Search Functionality**:
  - As the user types in the search bar, the app automatically fetches movie data from the OMDB API and updates the movie list.
  - Results are paginated, and users can click a "Load More" button to load more results.
  
- **Favorite Movies**:
  - Users can add movies to their favorites by clicking a button on the movie detail page.
  - Favorite movies are stored in the browser's local storage and can be viewed on the "Favorites" page.
  - Users can remove movies from their favorites on the "Favorites" page.





## API Key

The app uses the **OMDB API** to fetch movie data. You will need to replace the API key (`a06aaba2`) in the `fetchMovies` function with your own OMDB API key. To get an API key, you can sign up on the [OMDB website](http://www.omdbapi.com/apikey.aspx).




## Folder Structure

```
my-project/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── FavoritesContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetail.jsx
│   │   └── Favorites.jsx
│   │
│   └── App.jsx
│
└── package.json
```

- `index.jsx`: The entry point for the React app.
- `App.jsx`: The main component, including routes and layout.
- `Home.jsx`: The search page where users can search and view movies.
- `MoviePage.jsx`: The page showing detailed information about a selected movie.
- `Favorites.jsx`: The page displaying the user's favorite movies.
- `index.css`: Global styling for the app, including dark cinematic theme and custom styles.
- `App.css`: Additional styling, including animations and component-specific styles.

