import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../Utility/AddToDb';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const id = parseInt(bookId);
  const bookDetail = books.find(b => b.bookId === id);

  if (!bookDetail) {
    return (
      <div className="text-red-500 text-center mt-10 font-semibold">
        ⚠️ Book not found.
      </div>
    );
  }

  const {

    image,
    review,
    rating,
    tags,
    bookName,
    totalPages,
    category,
    author,
    yearOfPublishing,
    publisher
  } = bookDetail;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  }
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
    console.log(id);
  }
  return (
    <div className="max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100 rounded-lg shadow-md flex justify-center items-center h-full">
          <img src={image} alt={bookName} className="max-w-[55%] mx-auto" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>
          <p className="text-gray-700 mb-4">By: {author}</p>
          <p className="text-gray-600 mb-2">Category: {category}</p>
          <p className="text-gray-600 mb-2">Rating: {rating}</p>
          <p className="text-gray-600 mb-2">Total Pages: {totalPages}</p>
          <p className="text-gray-600 mb-2">Year of Publishing: {yearOfPublishing}</p>
          <p className="text-gray-600 mb-2">Publisher: {publisher}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Review:</h2>
            <p>{review}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold pb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className='pt-6'>
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-secondary hover:scale-105 transition-transform duration-300 ml-2">Read List</button>
            <button onClick={()=>handleAddToWishList(bookId)} className="btn btn-primary hover:scale-105 transition-transform duration-300 ml-2">Wish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
