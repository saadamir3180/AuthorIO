import { useState } from "react";
import AuthorIo from "./AuthorIo";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {

  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="header">
     <Link className="homeLink" to={"/"}>
      <AuthorIo />
        </Link>  
      <nav className="headerNavLargeScreen">
        <ul className="navUl">
          <li>
            <Link className="link" to="/HowItWorks">
              How It Works
            </Link>
          </li>
          <li>
            <Link className="link" to="/WorkSpace">
              WorkSpace
            </Link>
          </li>
          <li >
            <Link className="navLink navButton link" to="/GetStarted">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      <nav className={`headerNavSmallScreen ${isChecked ? "expanded" : ""}`}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
              <Link className="link" to="/HowItWorks" onClick={handleCheckboxChange}>
                How It works
              </Link>
            </li>
            <li>
              <Link className="link" to="/WorkSpace" onClick={handleCheckboxChange}>
                WorkSpace
              </Link>
            </li>
              <li>
                <Link
                  className="navLink navButton link"
                  to={"/GetStarted"}
                  onClick={handleCheckboxChange}
                >
                  Get Started
                </Link>
              </li>
          </ul>
        </label>
      </nav>

      {/* <AuthorIo/>
        <nav className='headerNav'>
            <ul className='navUl'>
                <li>Home</li>
                <li>About</li>
            </ul>
            <button className='navButton'>Get Started</button>
        </nav> */}
    </header>
  );
};

export default Header;
