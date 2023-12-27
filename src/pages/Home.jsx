import React from "react";
import "../styles/Svg.css";
import "../styles/Home.css";
import Circle from "./../components/Circle";
import ZigZag from "./../components/ZigZag";
import { motion } from "framer-motion";
import gsap from 'gsap'
import SearchBooks from "../components/SearchBooks";
import Dots from '../components/Dots.jsx'
import PopularBooks from "../components/PopularBooks.jsx";
import Img1 from "../assets/book1.jpg";
import Img2 from "../assets/book2.jpg";
import Img3 from "../assets/book3.jpg";
import Img4 from "../assets/book4.jpg";

const Home = () => {
  const booksData = [
    { id: 1, title: "Meditations", author: "Marcus Arelius", image: Img1 },
    { id: 2, title: "12 Rules for Life", author: "Jordan B. Peterson", image: Img2 },
    { id: 3, title: "A Mirrored Life", author: "The Rumi Novel", image: Img3 },
    { id: 4, title: "The Forty Rules of Love", author: "Elif Shafak", image: Img4 },
  ];

  React.useEffect(() => {
    gsap.from(".homeh1, .searchBar, .popularBooksContainer", { duration: 2, y: "30%" , ease: "ease", opacity: 0,  delay: 1});
  }, []); // Empty dependency array to run the effect only once when the component mounts
  
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="homeContainer">
        <h1 className="homeh1">
          AI Empowered <br />
          Authorship Redefined
        </h1>
        <SearchBooks />
        <PopularBooks booksData={booksData}/>
        <div className="svg svgZigZag shadowNeon">
          <ZigZag />
        </div>
        <div className="svg svgCircle">
          <Circle />
        </div>
        <div className="svg svgDots shadow">
          <Dots />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
