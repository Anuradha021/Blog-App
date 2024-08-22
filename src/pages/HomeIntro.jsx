import React from 'react';
import { Link } from 'react-router-dom';

function HomeIntro() {
  return (
    <section className="bg-blue-500 text-white text-center py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Welcome to MegaBlog</h1>
        <p className="text-lg mb-10">
          Discover insightful articles, stories, and ideas from creative minds around the world.
        </p>
        <div className="mb-8">
          <Link
            to="/blogs"
            className="bg-white text-blue-500 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Blogs
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="bg-transparent border border-white text-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
