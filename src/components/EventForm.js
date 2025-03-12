// src/components/EventForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Religious',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
    setFormData({
      title: '',
      date: '',
      location: '',
      category: 'Religious',
      description: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="event-form"
      onSubmit={handleSubmit}
    >
     
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Add Event</button>
    </motion.form>
  );
};

export default EventForm;