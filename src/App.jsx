import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseService"; 

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Chatbot from './components/Chatbot.jsx';
import Profile from './components/Profile.jsx';

import "./css/App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
        <div className="d-flex flex-column app-container">
          <Header />
          {
            user && 
            <div>
              <Profile user={{
                photo: user.photoURL,
                email: user.email,
                company: "Atos"
                }}/>
            </div>
          }
          <main className="d-flex flex-column justify-content-center align-items-center flex-grow-1 bg-atos container-fluid px-3">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<Chatbot />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </>
  );
}

export default App;
