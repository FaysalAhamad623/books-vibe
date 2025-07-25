import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Components/Utility/AddToDb';
import Book from '../Components/Book/Book';
// for read list
const ListedBooks = () => {
    const[sort,setSort] =useState('');
    const [readBook, setReadbook] = useState([]);
    const readBookLists = useLoaderData();
    useEffect(() => {
        const storedReadBooks = getStoredReadList();
        const storedReadBooksInt = storedReadBooks.map(id => parseInt(id));
        const readBookList = readBookLists.filter(book => storedReadBooksInt.includes(book.bookId));
        setReadbook(readBookList);

    }, [])
    // for wish list
    const [wishBook, setWishBook] = useState([]);
    useEffect(() => {
        const storedWishBooks = getStoredWishList();
        //console.log(storedWishBooks);
        const storedWishBooksInt = storedWishBooks.map(id => parseInt(id));
        //console.log(storedWishBooksInt);
        const wishBookList = readBookLists.filter(book => storedWishBooksInt.includes(book.bookId));
        //console.log(wishBookList);
        setWishBook(wishBookList);
        //console.log(wishBook);
    }, [])
    const handleSort = sortType =>{
        setSort(sortType);
        if(sortType === 'ratings'){
            const sortedBooks = [...readBook].sort((a, b) => b.rating - a.rating);
            console.log(sortedBooks);
            setReadbook(sortedBooks);
           
        }
        else if(sortType === 'number of pages'){
            const sortedBooks = [...readBook].sort((a, b) => a.totalPages - b.totalPages);
             console.log(sortedBooks);
            setReadbook(sortedBooks);
           
        }
    }
    return (
        <div>
            <h3 className='text-3xl py-8'>Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort by: ${sort}` : 'Sort by'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2  shadow-sm">
                    <li onClick={()=>handleSort("ratings")}><a >ratings</a></li>
                    <li onClick={()=>handleSort("number of pages")}><a >number of pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab >Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>I read books : {readBook.length}</h2>
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
                            readBook.map(book => <Book book={book} key={book.bookId}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default ListedBooks