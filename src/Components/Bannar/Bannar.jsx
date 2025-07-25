import React from 'react';

const Bannar = () => {
  return (
    <div className="hero bg-base-200 w-full">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <img
          src="/books.jpg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
          alt="Books"
        />
        <div className="text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary bg-emerald-600 mt-4 sm:mt-6">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
