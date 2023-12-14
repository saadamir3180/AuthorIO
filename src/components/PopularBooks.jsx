import { motion } from "framer-motion";
import "../styles/PopularBooks.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 0, opacity: 0 , },
  visible: {
    y: 100,
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};



const PopularBooks = ({booksData}) => {
  return (
    <motion.div className="popularBooksContainer"
    >
      {booksData.map((book) => (
        <div key={book.id} className="book" >
          <img className="bookImage" src={book.image} alt="img" variants={item}
    initial="hidden"
    animate="visible"/>
          <span>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default PopularBooks;
