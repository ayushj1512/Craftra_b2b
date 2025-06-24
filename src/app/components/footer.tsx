// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm font-mont">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">NewLakshiStore</h2>
          <p className="text-gray-300">
            NewLakshiStore delivers wholesale solutions to retailers, schools, and corporate buyers.
            We ensure quality, competitive pricing, and personalized service for operational efficiency and success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Request Quote', 'Sell With Us', 'Payment Terms', 'Contact Us'].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  &raquo; {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Wholesale Supplies</h3>
          <ul className="space-y-2">
            {['Office Supplies', 'Industry Supplies', 'School Supplies', 'College Supplies'].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  &raquo; {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
          <p className="flex items-center text-gray-300">
            <span className="mr-2">📧</span> sales@newlakshistore.in
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-6 py-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} NewLakshiStore. All rights reserved.</p>
        <p className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Refund Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Sitemap</a>
        </p>
      </div>
    </footer>
  );
}
