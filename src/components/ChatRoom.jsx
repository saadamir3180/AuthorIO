import React from 'react';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/ChatRoom.css';

const ChatRoom = () => {
  const [user, loading] = useAuthState(auth);

  // Sample chat messages
  const messages = [
    {
      "user_id": "user1",
      "text": "Hello, how are you?"
    },
    {
      "user_id": "user2",
      "text": "I'm doing well, thank you! How about you?"
    },
    {
      "user_id": "user1",
      "text": "I'm good too, thanks for asking."
    },
    {
      "user_id": "user2",
      "text": "What have you been up to today?"
    },
    {
      "user_id": "user1",
      "text": "Just working on some projects. How about you?"
    },
    {
      "user_id": "user2",
      "text": "I had a busy day at work, but now I'm relaxing."
    },
    {
      "user_id": "user1",
      "text": "That sounds nice. Anything exciting happening?"
    },
    {
      "user_id": "user2",
      "text": "Not really, just the usual. How about you?"
    }
  ];

  return (
    <div className='chatRoom'>
      <section>{user && user.displayName}</section>
      <div className='chat'>
        {messages.map((message, index) => (
          <div key={index} className={message.user_id === 'user1' ? 'sent' : 'received'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form
        className="searchBar2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        role="search"
      >
        <input type="text" id="searchBooks" placeholder="Type Message..." required />
        <button type="button">
        <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
