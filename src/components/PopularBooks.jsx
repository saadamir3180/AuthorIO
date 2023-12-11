import React from "react";
import "../styles/PopularBooks.css";
import Img1 from "../assets/book1.jpg";
import Img2 from "../assets/book2.jpg";
import Img3 from "../assets/book3.jpg";
import Img4 from "../assets/book4.jpg";

const booksData = [
  { id: 1, title: "Meditations", author: "Marcus Arelius", image: Img1 },
  { id: 2, title: "12 Rules for Life", author: "Jordan B. Peterson", image: Img2 },
  { id: 3, title: "A Mirrored Life", author: "The Rumi Novel", image: Img3 },
  { id: 4, title: "The Forty Rules of Love", author: "Elif Shafak", image: Img4 },
];

const PopularBooks = () => {
  return (
    <div className="popularBooksContainer">
      {booksData.map((book) => (
        <div key={book.id} className="book">
          <img className="bookImage" src={book.image} alt="img" />
          <span>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default PopularBooks;
