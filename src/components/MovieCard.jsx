import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { FavoritesContext } from '../context/FavoritesContext';

const MovieCard = ({ movie, size = 'normal' }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isMovieFavorite = isFavorite(movie.imdbID);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMovieFavorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  if (size === 'large') {
    return (
      <div className="flex bg-gray-800 rounded-lg overflow-hidden shadow-xl w-full max-w-[1250px] mx-auto">
        <div className="w-1/3">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
            alt={movie.Title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-6 relative">
          <button 
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <Heart 
              size={24} 
              className={`${isMovieFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
            />
          </button>
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-300 mb-4">Year: {movie.Year}</p>
          <p className="text-gray-300 mb-4">Type: {movie.Type}</p>
          <Link 
            to={`/movie/${movie.imdbID}`} 
            className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-[300px] relative group">
      <div className="relative">
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
          alt={movie.Title} 
          className="w-full h-[400px] object-cover"
        />
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-all"
        >
          <Heart 
            size={20} 
            className={`${isMovieFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.Title}</h3>
        <p className="text-gray-400 mb-3">{movie.Year}</p>
        <Link 
          to={`/movie/${movie.imdbID}`} 
          className="inline-block w-full text-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;