import { useEffect, useState } from "react"
import Book from "../Book/Book"


const Books = () => {
     const [books, setBooks] = useState([])
     useEffect(()=>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data =>setBooks(data))
     }
        ,[])
  return (
   
    <div>
        <p className="text-4xl font-bold text-center pt-2 md:pt-5">Books</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w- py-6 h-full mx-auto">
            {
                books.map(book =><Book book={book} key={book.bookId}></Book> )
            }
        </div>
    </div>
  )
}

export default Books