import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Components/Utility/AddToDb';
import Book from '../Components/Book/Book';

const ListedBooks = () => {
  const [sort, setSort] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [readBook, setReadbook] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  // Keep originals for sorting
  const [originalReadBook, setOriginalReadBook] = useState([]);
  const [originalWishBook, setOriginalWishBook] = useState([]);

  const bookLists = useLoaderData();

  useEffect(() => {
    const storedReadBooks = getStoredReadList().map(id => parseInt(id));
    const readBookList = bookLists.filter(book => storedReadBooks.includes(book.bookId));
    setOriginalReadBook(readBookList);
    setReadbook(readBookList);
  }, [bookLists]);

  useEffect(() => {
    const storedWishBooks = getStoredWishList().map(id => parseInt(id));
    const wishBookList = bookLists.filter(book => storedWishBooks.includes(book.bookId));
    setOriginalWishBook(wishBookList);
    setWishBook(wishBookList);
  }, [bookLists]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (activeTabIndex === 0) {
      // Sort Read List
      const sorted = [...originalReadBook];
      if (sortType === 'ratings') sorted.sort((a, b) => b.rating - a.rating);
      else if (sortType === 'number of pages') sorted.sort((a, b) => b.totalPages - a.totalPages);
      setReadbook(sorted);
    } else {
      // Sort Wish List
      const sorted = [...originalWishBook];
      if (sortType === 'ratings') sorted.sort((a, b) => b.rating - a.rating);
      else if (sortType === 'number of pages') sorted.sort((a, b) => b.totalPages - a.totalPages);
      setWishBook(sorted);
    }
  }

  return (
    <div>
      <h3 className='text-3xl py-8'>Listed Books</h3>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : 'Sort by'}
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm">
          <li onClick={() => handleSort("ratings")} className='bg-blue-600 hover:bg-white text-white text-sm my-2 rounded-sm'><a>ratings</a></li>
          <li onClick={() => handleSort("number of pages")} className='bg-green-600  hover:bg-white text-white text-sm my-2 rounded-sm'><a>number of pages</a></li>
        </ul>
      </div>

      <Tabs selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>I read books: {readBook.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {
              readBook.map(book => <Book book={book} key={book.bookId}></Book>)
            }
          </div>
        </TabPanel>

        <TabPanel>
          <h2>My wish list: {wishBook.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {
              wishBook.map(book => <Book book={book} key={book.bookId}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ListedBooks;
