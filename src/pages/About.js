// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const timelineEvents = [
    { year: "2020", event: "Communion Founded", description: "Started as a small community initiative to connect people of different faiths." },
    { year: "2021", event: "First Interfaith Event", description: "Hosted our first large-scale interfaith gathering with over 200 attendees." },
    { year: "2022", event: "Launched Online Platform", description: "Introduced our web platform to make events accessible to a wider audience." },
    { year: "2023", event: "Expanded Globally", description: "Partnered with international organizations to host events in 10+ countries." },
  ];

  const teamMembers = [
    { name: "Jane Doe", role: "Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { name: "John Smith", role: "Event Coordinator", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { name: "Emily Johnson", role: "Community Manager", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Lana Johnson", role: "Community Manager", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const values = [
    { title: "Inclusivity", description: "We welcome everyone, regardless of faith, culture, or background.", icon: "🌍" },
    { title: "Compassion", description: "We promote kindness and empathy in all our interactions.", icon: "❤️" },
    { title: "Community", description: "We believe in the power of togetherness to drive meaningful change.", icon: "🤝" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-hero"
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Communion
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building bridges between communities through faith, compassion, and shared experiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-section"
      >
        <h2>Our Mission</h2>
        <p>
          At Communion, we are dedicated to fostering unity and understanding among people of all faiths and backgrounds.
          Our mission is to create a platform where individuals can come together to celebrate diversity, share experiences,
          and support one another through meaningful events and community initiatives.
        </p>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-section"
      >
        <h2>Our Vision</h2>
        <p>
          We envision a world where differences are celebrated, and communities are strengthened through mutual respect and
          collaboration. Communion aims to be the leading platform for interfaith and intercultural events, inspiring positive
          change one gathering at a time.
        </p>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="values-section"
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="value-card"
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="timeline-section"
      >
        <h2>Our Journey</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <h3>{event.year}</h3>
                <h4>{event.event}</h4>
                <p>{event.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="team-section"
      >
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="team-card"
            >
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
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
        <h2>Join Our Mission</h2>
        <p>Be part of a global movement to connect, inspire, and uplift communities.</p>
        <Link to="/events" className="cta-button">Get Involved</Link>
      </motion.section>
    </div>
  );
};

export default About;