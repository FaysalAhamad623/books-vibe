import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, bookName, image, review, rating, tags, totalPages, category, author, yearOfPublishing, publisher } = book;
    return (
       <Link to={`/books/${bookId}`}>
  <div className="card bg-base-100 w-96 shadow-sm h-full p-6 group transition-transform duration-300 hover:shadow-lg">
    <figure className='p-6 bg-gray-200'>
      <img
        src={image}
        className='max-w-[100px] h-[166px] mx-auto transform transition-transform duration-300 group-hover:scale-130'
        alt={bookName}
      />
    </figure>
    <div>
      <p  className='py-2 text-xl'>Total Pages : {totalPages}</p>
      <div className='flex justify-between items-center py-3'>
        {
          tags.map((tag, index) => (
            <button
              key={index}
              className="bg-green-100 text-green-800 px-3 py-2 rounded-2xl"
            >
              {tag}
            </button>
          ))
        }
      </div>
      <p className='text-2xl font-bold py-3'>{bookName}</p>
      <p className='border-b border-dashed py-3 border-gray-400'>By: {author}</p>
      <div className="flex justify-between items-center mt-2 md:mt-3">
        <p>{category}</p>
        <p>{rating}</p>
      </div>
    </div>
  </div>
</Link>

    )
}

export default Book