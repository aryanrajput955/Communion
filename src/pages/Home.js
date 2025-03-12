// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredEvents = [
    {
      title: "Interfaith Harmony Week",
      date: "2024-02-01",
      location: "City Park",
      description: "Celebrate diversity with music, food, and prayers from various faiths.",
      image: "https://images.unsplash.com/photo-1586181191395-de3b696b74b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Charity Run for Hope",
      date: "2024-03-15",
      location: "Downtown Stadium",
      description: "Join us for a 5K run to raise funds for local shelters.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Community Potluck Dinner",
      date: "2024-04-10",
      location: "Central Community Center",
      description: "Bring a dish and share stories with neighbors from all walks of life.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Meditation and Mindfulness Retreat",
      date: "2024-05-20",
      location: "Serenity Gardens",
      description: "A day of peace and reflection open to all spiritual traditions.",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Youth Leadership Workshop",
      date: "2024-06-05",
      location: "Unity Hall",
      description: "Empowering young minds to lead with compassion and understanding.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    },
    {
      title: "Charity Run for Hope",
      date: "2024-03-15",
      location: "Downtown Stadium",
      description: "Join us for a 5K run to raise funds for local shelters.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const testimonials = [
    {
      quote: "Communion helped me connect with people from different faiths in ways I never thought possible.",
      author: "Sarah M.",
    },
    {
      quote: "The events are always so well-organized and inspiring. I’ve made lifelong friends here!",
      author: "James R.",
    },
    {
      quote: "I attended the charity run and felt so uplifted by the community's spirit and kindness.",
      author: "Aisha K.",
    },
    {
      quote: "The mindfulness retreat was a transformative experience. I’m so grateful for this platform!",
      author: "Michael T.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Connecting People Across Faiths & Interests
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join a vibrant community where diversity is celebrated through events, support, and shared experiences.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/events" className="cta-button">
              Explore Events
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="welcome"
      >
        <h2>Welcome to Communion</h2>
        <p>
          We believe in the power of unity and shared experiences. Our platform connects people of all faiths through diverse
          events ranging from spiritual gatherings to social and charity initiatives.
        </p>
      </motion.section>

      {/* Featured Events Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="featured-events"
      >
        <h2>Featured Events</h2>
        <div className="events-preview">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="event-preview-card"
            >
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
                <Link to="/events" className="event-link">Learn More</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="testimonials"
      >
        <h2>What Our Community Says</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="testimonial-card"
            >
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.author}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cta-section"
      >
        <h2>Join Our Community Today!</h2>
        <p>Be part of something bigger—connect, celebrate, and make a difference.</p>
        <Link to="/events" className="cta-button">Get Involved</Link>
      </motion.section>
    </div>
  );
};

export default Home;