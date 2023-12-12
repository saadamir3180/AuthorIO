import React from 'react';
import { motion } from 'framer-motion';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/HowItWorks.css' 
import Cube from '../components/Cube';
import Block from '../components/Block';
import '../styles/Svg.css'
import HalfCircle from '../components/HalfCircle';

const Blog = ({ userType }) => {
  const [ user, loading ] = useAuthState(auth)

  return ( 
    <motion.div
    className="box"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="blog shadow">
      <h1>Welcome to AuthorIO Guide</h1>

      {/* Introduction */}
      <section>
        <h3 className="shadow">Introduction</h3>
        <p>
          <h4>{user ? `${user.displayName}` : null }</h4> Welcome to AuhorIO, a platform where you can explore, read, and create amazing content. Whether you are an Author or a Reader, we have features tailored for you!
        </p>
      </section>

      {/* Main Features */}
      <section>
        <h3 className="shadow">Main Features</h3>
        <ul className='list'>
          <li>Search and Read Books</li>
          <li>Explore Popular Books</li>
          <li>{userType === 'Author' ? 'Write and Publish Books' : 'Save Bookmarks and Favorite Books'}</li>
          <li>{userType === 'Author' ? 'Create and Edit Books within the Application' : 'Login to Save Your Preferences'}</li>
          <li>{userType === 'Author' ? 'Manage Your Workspace and E-Library' : 'Change Password and Profile Image'}</li>
        </ul>
      </section>

      {/* Sign Up */}
      <section>
        <h3 className="shadow">Sign Up</h3>
        <p>
          {userType === 'Author'
            ? 'Sign up as an Author to start creating and publishing your own books.'
            : 'Sign up as a Reader to access personalized features like bookmarks and favorites.'}
        </p>
        <p>Upon registration, you will receive a verification email to activate your account.</p>
      </section>

      {/* Login */}
      <section>
        <h3 className="shadow">Login</h3>
        <p>
          {userType === 'Author'
            ? 'Login to access your Author dashboard, manage your workspace, and explore the E-Library.'
            : 'Login to save your bookmarks, favorite books, and personalize your reading experience.'}
        </p>
      </section>

      {/* Change Password and Image */}
      <section>
        <h3 className="shadow">Change Password and Profile Image</h3>
        <p>
          {userType === 'Author'
            ? 'As an Author, you can change your password and update your profile image to enhance your author profile.'
            : 'Readers can change their passwords and personalize their profile images for a customized experience.'}
        </p>
      </section>
      <div className="svg svgCube shadow">
          <Cube />
      </div>
      <div className="svg svgHalfCircle shadow">
          <HalfCircle />
      </div>
    </div>
    </motion.div>
  );
};

export default Blog;
