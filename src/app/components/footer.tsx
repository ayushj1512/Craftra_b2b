// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm font-mont">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">New Lakshmi Store</h2>
            <p className="text-gray-300">
              We provide wholesale solutions to retailers, schools, and corporate buyers with quality, competitive pricing, and personalized service.
            </p>
          </div>
          <div className="w-full h-40 rounded-md overflow-hidden mt-4">
            <iframe
              title="NewLakshiStore Location"
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

        {/* Quick Links */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <div className="flex flex-col gap-2 text-gray-300">
              <a href="#" className="hover:text-white transition">&raquo; Home</a>
              <a href="#" className="hover:text-white transition">&raquo; About Us</a>
              <a href="#" className="hover:text-white transition">&raquo; Request Quote</a>
              <a href="#" className="hover:text-white transition">&raquo; Sell With Us</a>
              <a href="#" className="hover:text-white transition">&raquo; Payment Terms</a>
              <a href="#" className="hover:text-white transition">&raquo; Contact Us</a>
            </div>
          </div>
        </div>

        {/* Contact + Map */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>🙎🏻Sanjay Goel, Pratham Goel, Pranav Goel</li>
              <li>📞 9818043003, 9582834877, 9899938464</li>
              <li>☎️ 011-41734340</li>
              <li>🧾 GST: 07AESPG4259H1Z6</li>
              <li>🏢 4350/59, Padam Singh Rd, Karol Bagh, New Delhi - 110005</li>
              <li>📧 newlakshmistore96@gmail.com</li>
              <li>🌐 newlakshmistore.com</li>
            </ul>
          </div>

          {/* Embedded Map */}
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} NewLakshiStore. All rights reserved.</p>
        <div className="mt-2 space-x-3">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Refund Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
