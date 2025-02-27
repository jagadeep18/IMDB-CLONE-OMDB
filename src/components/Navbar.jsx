import { Film, Heart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Film size={24} className="text-red-500" />
            <span className="text-xl font-bold">IMDB CLONE (OMDB)</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            <Link to="/favorites" className="flex items-center space-x-1 hover:text-red-400 transition-colors">
              <Heart size={18} className="text-red-500" />
              <span>Favorites</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;