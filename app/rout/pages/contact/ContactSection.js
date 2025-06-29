"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1: Contact Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
          quis bibendum.
        </p>
        <p className="text-gray-700">Via S. Raffaele, 6, 20121 Milano</p>
        <p className="text-gray-700">Monday to Friday: 9am to 8pm</p>
        <p className="text-gray-700">hyperon@qodeinteractive.com</p>
        <div className="flex gap-4 text-xl mt-4">
          <span>📘</span>
          <span>🐦</span>
          <span>📸</span>
          <span>📌</span>
        </div>
      </div>

      {/* Column 2 & 3: Contact Form */}
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="off"
              className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="off"
              className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            autoComplete="off"
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            autoComplete="off"
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded min-h-[150px]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
