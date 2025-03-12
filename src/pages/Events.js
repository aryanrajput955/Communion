// src/pages/Events.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([
    {
      title: "Interfaith Prayer Gathering",
      date: "2024-01-15",
      location: "Community Center",
      category: "Religious",
      description: "Join us for a peaceful gathering of prayer and meditation.",
      image: "https://images.unsplash.com/photo-1586181191395-de3b696b74b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
    },
    {
      title: "Charity Food Drive",
      date: "2024-01-20",
      location: "Downtown Square",
      category: "Charity",
      description: "Help us collect food for the local shelter.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Community Yoga Session",
      date: "2024-02-05",
      location: "Central Park",
      category: "Social",
      description: "A relaxing yoga session open to all fitness levels.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Book Club Meeting",
      date: "2024-02-10",
      location: "Public Library",
      category: "Social",
      description: "Discuss this month's book on spirituality and culture.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" }]);
  };

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  const featuredEvent = events.find(event => event.featured);

  return (
    <div className="events-page">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="events-hero"
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join our community events to connect, celebrate, and make a difference.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Event Spotlight */}
      {featuredEvent && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="featured-event-spotlight"
        >
          <h2>Featured Event</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="featured-event-card"
          >
            <img src={featuredEvent.image} alt={featuredEvent.title} className="featured-event-image" />
            <div className="featured-event-info">
              <h3>{featuredEvent.title}</h3>
              <p><strong>Date:</strong> {featuredEvent.date}</p>
              <p><strong>Location:</strong> {featuredEvent.location}</p>
              <p><strong>Category:</strong> {featuredEvent.category}</p>
              <p>{featuredEvent.description}</p>
              <Link to="#" className="event-link">Join Now</Link>
            </div>
          </motion.div>
        </motion.section>
      )}



      {/* Add Event Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="add-event-section"
      >
        <h2>Add a New Event</h2>
        <EventForm onAddEvent={addEvent} />
      </motion.section>


      {/* Filter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="filter-section"
      >
        <h2>Filter Events</h2>
        <div className="filter-buttons">
          {["All", "Religious", "Social", "Charity"].map((category) => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.section>
      {/* Event Listing */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="events-listing"
      >
        <h2>All Events</h2>
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cta-section"
      >
        <h2>Host Your Own Event</h2>
        <p>Bring your community together—create an event and inspire others!</p>
        <Link to="#" className="cta-button">Create an Event</Link>
      </motion.section>
    </div>
  );
};

export default Events;