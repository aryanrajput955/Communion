// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="logo">
        {/* <img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/pray-1822633_960_720.png" alt="Communion Logo" /> */}
        <h1>Communion</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li> {/* Already pointing to /about */}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;