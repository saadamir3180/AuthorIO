import React from 'react'
import { motion } from 'framer-motion'
import PopularBooks from './../components/PopularBooks';
import '../styles/ELibrary.css'
import Img1 from "../assets/book1.jpg";
import Img2 from "../assets/book2.jpg";
import Img3 from "../assets/book3.jpg";
import Img4 from "../assets/book4.jpg";

const ELibrary = () => {

  const booksData = [
    { id: 1, title: "Meditations", author: "Marcus Arelius", image: Img1 },
    { id: 2, title: "12 Rules for Life", author: "Jordan B. Peterson", image: Img2 },
    { id: 3, title: "A Mirrored Life", author: "The Rumi Novel", image: Img3 },
    { id: 4, title: "The Forty Rules of Love", author: "Elif Shafak", image: Img4 },
    // { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee", image: Img5 },
    // { id: 6, title: "1984", author: "George Orwell", image: Img6 },
    // { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: Img7 },
    // { id: 8, title: "Pride and Prejudice", author: "Jane Austen", image: Img8 },
    // { id: 9, title: "The Catcher in the Rye", author: "J.D. Salinger", image: Img9 },
    // { id: 10, title: "Brave New World", author: "Aldous Huxley", image: Img10 },
    // { id: 11, title: "The Alchemist", author: "Paulo Coelho", image: Img11 },
    // { id: 12, title: "The Lord of the Rings", author: "J.R.R. Tolkien", image: Img12 },
    // { id: 13, title: "The Chronicles of Narnia", author: "C.S. Lewis", image: Img13 },
    // { id: 14, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", image: Img14 },
    // { id: 15, title: "The Hobbit", author: "J.R.R. Tolkien", image: Img15 },
    // Add more books as needed
  ];

  return (
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className='eLibraryContainer'>
      <PopularBooks booksData={booksData}/>
      </div>
    </motion.div>
  )
}

export default ELibrary