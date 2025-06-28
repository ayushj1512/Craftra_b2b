'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function ContactPage() {
  const { primary, accent1 } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    organisationName: '',
    location: '',
    queryType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://craftra-backend.onrender.com/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Query submitted successfully!');
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
        const errorData = await res.json();
        toast.error(errorData.message || 'Failed to submit query.');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#000',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          },
        }}
      />

      {/* Header Section */}
      <section className="bg-blue-100 py-8 px-4 text-center font-mont">
        <h1 className="text-xl mt-10 sm:text-2xl font-bold text-gray-800">Contact Us</h1>

        <div className="mt-1 text-gray-600 text-sm">
          <span className="text-gray-800 font-medium">Home</span>
          <span className="mx-1">/</span>
          <span>Contact Us</span>
          <p>Get a quotation especially curated for you. Fill out the form below and we'll get back to you.</p>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-gray-700 text-sm sm:text-base flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <span className="flex items-center gap-1">
            <MdPhone className="text-blue-800" />
            +91 9582834877
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <MdPhone className="text-blue-800" />
            011-41734340
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <MdLocationOn className="text-blue-800" />
            4350/59, Padam Singh Rd, Karol Bagh, New Delhi - 110005
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <MdEmail className="text-blue-800" />
            <a
              href="mailto:New Lakshmi Store96@gmail.com"
              className="text-blue-800 hover:underline"
            >
              New Lakshmi Store96@gmail.com
            </a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center items-center gap-5 text-xl">
          <a
            href="https://www.facebook.com/NLSyourstationerypal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/soarwithpankh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="http://wa.me/+919582834877"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-10 px-4 font-mont">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm">
            {[ 
              { label: 'Name *', name: 'name', required: true },
              { label: 'Phone Number *', name: 'phoneNumber', required: true, type: 'tel' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Organisation Name', name: 'organisationName' },
              { label: 'Location', name: 'location' },
            ].map(({ label, name, type = 'text', required }) => (
              <div className="col-span-1" key={name}>
                <label className="block text-gray-700 font-medium mb-1">{label}</label>
                <input
                  name={name}
                  value={formData[name as keyof typeof formData]}
                  onChange={handleChange}
                  type={type}
                  required={required}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:outline-none focus:ring-blue-300 text-sm"
                />
              </div>
            ))}

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

            <div className="col-span-1 sm:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-300 text-sm"
              />
            </div>

            <div className="col-span-1 sm:col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`text-sm font-semibold px-6 py-2 rounded transition duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : `bg-[${primary}] hover:bg-[${accent1}]`
                }`}
                style={{
                  backgroundColor: loading ? '#ccc' : primary,
                  color: '#000',
                }}
              >
                {loading ? 'Submitting...' : 'Submit Query'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
