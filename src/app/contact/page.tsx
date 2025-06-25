'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    organisationName: '',
    location: '',
    queryType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Query submitted successfully!');
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          organisationName: '',
          location: '',
          queryType: '',
          message: '',
        });
      } else {
        alert('Failed to submit query.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* Top Header */}
      <section className="bg-blue-100 py-8 px-4 text-center font-mont">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Us</h1>
        <div className="mt-1 text-gray-600 text-sm">
          <span className="text-gray-800 font-medium">Home</span>
          <span className="mx-1">/</span>
          <span>Contact Us</span>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-10 px-4 font-mont">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm">
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            {/* Phone */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Phone Number *</label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            {/* Org Name */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Organisation Name</label>
              <input
                name="organisationName"
                value={formData.organisationName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            {/* Location */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            {/* Query Type */}
            <div className="col-span-1">
              <label className="block text-gray-700 font-medium mb-1">Query Type *</label>
              <select
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              >
                <option value="">Select one</option>
                <option value="Bulk Purchase">Bulk Purchase</option>
                <option value="Reseller">Reseller</option>
                <option value="Partnership">Partnership</option>
                <option value="Custom Requirement">Custom Requirement</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-span-1 sm:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-200 text-black font-semibold px-6 py-2 rounded hover:bg-blue-300 transition duration-300 text-sm"
              >
                Submit Query
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
