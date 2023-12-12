import { useState } from "react";
import AuthorIo from "./AuthorIo";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth'
import "../styles/Header.css";
import Loading from "./Loading";

const Header = () => {

  const [ user, loading ] = useAuthState(auth);
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
          { user && user.emailVerified ? 
          <li>
            <Link className="link" to="/WorkSpace">
              WorkSpace
            </Link>
          </li> : null}
          <li>
          <Link className="link" to="/ELibrary">
            E-Library
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
            { user && user.emailVerified ? 
            <li>
            <Link className="link" to="/WorkSpace" onClick={handleCheckboxChange}>
              WorkSpace
            </Link>
          </li>: null}
          <li>
          <Link className="link" to="/ELibrary" onClick={handleCheckboxChange}>
            E-Library
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
        {/* { loading ? <Loading/> : null} */}
    </header>
  );
};

export default Header;
