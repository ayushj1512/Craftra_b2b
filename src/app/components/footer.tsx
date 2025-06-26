'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { primary, accent1 } = useTheme();

  return (
    <footer className="bg-black text-white text-sm font-mont">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Company Info */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: primary }}>
              New Lakshmi Store
            </h2>
            <p className="text-gray-400 leading-relaxed">
              As work and education evolve, we continue to bridge the gap with dependable deliveries and competitive prices. From paper and pens to toners and tech accessories, shopping with us means getting exactly what you need—quickly, easily, and reliably. We’re here to make your stationery experience effortless, not overwhelming.
            </p>
          </div>
        </div>

        {/* Column 2: Explore Links + Social Icons */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: primary }}>
              Explore
            </h3>
            <nav className="flex flex-col gap-3 text-gray-400 mb-6">
              <a href="/" className="hover:text-white transition duration-200">&raquo; Home</a>
              <a href="/about" className="hover:text-white transition duration-200">&raquo; About Us</a>
              <a href="/contact" className="hover:text-white transition duration-200">&raquo; Contact Us</a>
            </nav>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/NLSyourstationerypal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/soarwithpankh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="http://wa.me/+919582834877"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Google Map */}
        <div className="flex flex-col justify-between h-full">
          <div className="w-full h-52 md:h-60 rounded-md overflow-hidden border border-gray-700 shadow-md">
            <iframe
              title="NewLakshmiStore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.006250014534!2d77.1893324!3d28.6316037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035c4168e3e5%3A0x843e29de38363093!2s4350%2F59%2C%20Padam%20Singh%20Rd%2C%20Block%2029%2C%20Block%201%2C%20Regar%20Pura%2C%20Karol%20Bagh%2C%20New%20Delhi%2C%20Delhi%20110005!5e0!3m2!1sen!2sin!4v1719310866436!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span style={{ color: accent1 }}>NewLakshmiStore</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
