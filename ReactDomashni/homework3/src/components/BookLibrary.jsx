import { useState } from "react"
import BookCard from "./BookCard";

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        available: true,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        available: false,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction",
        available: true,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        available: true,
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        available: false,
    },
];

const BookLibrary = () => {
    const [filter, setFilter] = useState("all");

    const filteredBooks = books.filter(book => filter === "all" ? true : book.available);

return(
    <div>
        <h1>Book Library</h1>
        <div className="buttons">
            <button onClick={()=> setFilter("all")}>See all books</button>
            <button onClick={()=> setFilter("available")}>See available books</button>
        </div>
        <div>
            {filteredBooks.map(book => <BookCard {...book}/>)}
        </div>
    </div>
)
}
export default BookLibrary