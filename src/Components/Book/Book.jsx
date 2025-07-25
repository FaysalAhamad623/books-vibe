import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    image,
    review,
    rating,
    tags,
    totalPages,
    category,
    author,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <Link to={`/books/${bookId}`} className="block">
      <div className="bg-base-100 shadow-sm h-full p-4 sm:p-6 group transition-transform duration-300 hover:shadow-lg rounded-lg w-full max-w-sm mx-auto">
        <figure className="p-4 bg-gray-200 rounded-md">
          <img
            src={image}
            className="w-auto h-[160px] mx-auto transform transition-transform duration-300 group-hover:scale-105"
            alt={bookName}
          />
        </figure>
        <div>
          <p className="py-2 text-sm sm:text-base">Total Pages: {totalPages}</p>
          <div className="flex flex-wrap gap-2 py-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-2xl text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg sm:text-xl font-bold py-2">{bookName}</p>
          <p className="border-b border-dashed py-2 border-gray-400 text-sm sm:text-base">
            By: {author}
          </p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">{category}</p>
            <p className="text-sm font-medium">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
