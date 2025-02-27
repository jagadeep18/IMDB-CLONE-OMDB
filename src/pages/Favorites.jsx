import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <Heart size={64} className="text-gray-500" />
        <h2 className="text-2xl font-bold text-center">No favorites yet</h2>
        <p className="text-gray-400 text-center">
          Add movies to your favorites by clicking the heart icon on any movie card.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Heart size={24} className="text-red-500" />
        <h2 className="text-2xl font-bold">Your Favorite Movies</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;