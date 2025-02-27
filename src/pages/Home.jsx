import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  // Fetch recommended movies on component mount
  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      setLoading(true);
      try {
        // Popular movie titles for recommendations
        const popularTitles = ["Avengers", "Marvel", "Mario", "Batman", "Superman", "Spiderman", "Star Wars", "Harry Potter", "Lord of the Rings", "Jurassic Park"];
        const randomTitle = popularTitles[Math.floor(Math.random() * popularTitles.length)];
        
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${randomTitle}&apikey=a06aaba2&page=1`
        );
        
        if (response.data.Search) {
          setRecommendedMovies(response.data.Search.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
      setLoading(false);
    };

    fetchRecommendedMovies();
  }, []);

  const fetchMovies = async (query, pageNumber = 1) => {
    if (query.length < 3) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=a06aaba2&page=${pageNumber}`
      );
      if (response.data.Search) {
        setMovies((prev) => (pageNumber === 1 ? response.data.Search : [...prev, ...response.data.Search]));
        setTotalResults(response.data.totalResults);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (search) {
      fetchMovies(search, page);
    }
  }, [search, page]);

  const handleSearch = (query) => {
    setSearch(query);
    setPage(1);
    setMovies([]);
  };

  const handleLoadMore = () => {
    if (movies.length < totalResults) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            className="w-full py-3 px-4 pl-12 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Recommended Movies Section */}
      {!search && recommendedMovies.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recommended Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {search && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Search Results</h2>
          {movies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>

              {/* Load More Button */}
              {movies.length > 0 && movies.length < totalResults && (
                <div className="flex justify-center mt-8">
                  <button 
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </>
          ) : (
            !loading && <p className="text-center text-gray-400">No movies found. Try a different search term.</p>
          )}
        </div>
      )}

      {/* Loading Message */}
      {loading && search.length < 3 && (
        <div className="flex justify-center">
          <p className="text-gray-400">Type at least 3 characters to search...</p>
        </div>
      )}
      
      {loading && search.length >= 3 && (
        <div className="flex justify-center">
          <p className="text-gray-400">Loading movies...</p>
        </div>
      )}
    </div>
  );
};

export default Home;