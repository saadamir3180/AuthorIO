import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { motion } from "framer-motion";
import Img1 from "../assets/book2.jpg";
import "../styles/User.css";

const User = () => {
  const [user] = useAuthState(auth);

  const documents = [
    {
      name: "Document 1",
      lastEdited: "2023-12-01 T10:30:00",
      editor: "John Doe",
      imageUrl: Img1,
    },
    {
      name: "Document 2",
      lastEdited: "2023-12-02 T15:45:00",
      editor: "Jane Doe",
      imageUrl: Img1,
    },
    {
      name: "Document 3",
      lastEdited: "2023-12-03 T14:20:00",
      editor: "Alice Smith",
      imageUrl: Img1,
    },
    {
      name: "Document 4",
      lastEdited: "2023-12-04 T09:55:00",
      editor: "Bob Johnson",
      imageUrl: Img1,
    },
  ];

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <motion.div className="box page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className="userProfile">
      {user && (
        <div className="profileInfo">
          <img src={user.photoURL} alt="Profile" />
          {user.photoURL == null ? (
            <div className="imageInput">
              <label>
                Choose Image
                <input type="file" />
              </label>
            </div>
          ) : null}
          <h2>{user.displayName}</h2>
          <p>Status: {user.emailVerified ? "Author" : "Reader"}</p>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <div className="border shadow"></div>
      <div className="documentContainer">
        <h1>My Documents</h1>
        <ul>
          {documents.map((document, index) => (
            <li className="bookInfo" key={index}>
              <img src={document.imageUrl} alt={`Document ${index + 1}`} />
              <strong>{document.name}</strong>
              <p>Last Edited: {document.lastEdited}</p>
              <p>
                <b>By: {document.editor}</b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </motion.div>
  );
};

export default User;
