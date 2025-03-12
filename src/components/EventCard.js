// src/components/EventCard.js
import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="event-card"
    >
      {event.image && <img src={event.image} alt={event.title} className="event-card-image" />}
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p>{event.description}</p>
        <a href="#" className="event-link">Join Now</a>
      </div>
    </motion.div>
  );
};

export default EventCard;