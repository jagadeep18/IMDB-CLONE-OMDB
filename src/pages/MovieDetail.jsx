import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { Calendar, Clock, Star, Award, Film } from 'lucide-react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=a06aaba2&plot=full`
        );
        
        if (response.data) {
          setMovie(response.data);
        } else {
          setError('Movie not found');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to fetch movie details');
      }
      setLoading(false);
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl">Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  // Convert movie to format compatible with MovieCard
  const movieCardData = {
    imdbID: movie.imdbID,
    Title: movie.Title,
    Year: movie.Year,
    Poster: movie.Poster,
    Type: movie.Type
  };

  return (
    <div className="space-y-8">
      <MovieCard movie={movieCardData} size="large" />
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Movie Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-red-500" />
              <span className="text-gray-300">Released:</span>
              <span>{movie.Released}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock size={20} className="text-red-500" />
              <span className="text-gray-300">Runtime:</span>
              <span>{movie.Runtime}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Film size={20} className="text-red-500" />
              <span className="text-gray-300">Genre:</span>
              <span>{movie.Genre}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-red-500" />
              <span className="text-gray-300">Rating:</span>
              <span>{movie.imdbRating} / 10</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <span className="text-gray-300">Director:</span>
              <p>{movie.Director}</p>
            </div>
            
            <div>
              <span className="text-gray-300">Writer:</span>
              <p>{movie.Writer}</p>
            </div>
            
            <div>
              <span className="text-gray-300">Actors:</span>
              <p>{movie.Actors}</p>
            </div>
            
            {movie.Awards !== "N/A" && (
              <div className="flex items-start space-x-2">
                <Award size={20} className="text-red-500 mt-1" />
                <span className="text-gray-300">Awards:</span>
                <p>{movie.Awards}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Plot</h4>
          <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;