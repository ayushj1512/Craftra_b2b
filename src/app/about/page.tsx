'use client';

import {
  ClipboardDocumentCheckIcon,
  TruckIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
  UserIcon,
  LightBulbIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      {/* Page Title & Breadcrumb */}
      <section className="bg-blue-100 py-8 text-center font-mont">
        <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
        <div className="mt-1 text-gray-600 text-sm">
          <span className="text-gray-800 font-medium">Home</span>
          <span className="mx-1">/</span>
          <span>About Us</span>
        </div>
      </section>

      {/* Redefining Stationery Supply Section */}
      <section className="py-12 bg-white font-mont px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Redefining Stationery Supply for Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-10">
            NewLakshiStore is your trusted wholesale stationery provider. We offer a diverse range of stationery
            products tailored for offices, industries, schools, and institutions. With a focus on quality, affordability,
            and seamless service, we help streamline your procurement process and reduce operational load.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Our Mission',
                icon: ClipboardDocumentCheckIcon,
                text: 'To deliver seamless, cost-effective, and tailored stationery solutions through our online platform.',
              },
              {
                title: 'Our Vision',
                icon: EyeIcon,
                text: 'To be the foremost provider of wholesale stationery, connecting businesses with quality and trust.',
              },
              {
                title: 'Our Values',
                icon: LightBulbIcon,
                text: 'Integrity, innovation, customer-centricity, and reliability guide our every delivery and service.',
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-4 text-left border border-gray-100 text-sm">
                <div className="text-blue-300 mb-3">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Get Wholesale Stationery Online */}
      <section className="py-16 px-4 bg-gray-50 font-mont">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Why Get Wholesale Stationery Online?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-10">
            If you are a business in need of stationery stock, there are great benefits to using our supplier service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-sm">
            {[
              { icon: ClipboardDocumentCheckIcon, text: "Bulk online orders often come with exclusive discounts, minimizing procurement expenses." },
              { icon: TruckIcon, text: "Our streamlined platform offers easy browsing, selection, and swift delivery." },
              { icon: PencilSquareIcon, text: "We provide a vast array of stationery options — all in one place." },
              { icon: GlobeAltIcon, text: "Our platform caters to businesses across locations with seamless access." },
              { icon: Cog6ToothIcon, text: "Bulk orders reduce the need for storage, optimizing space and operations." },
              { icon: UserIcon, text: "Online procurement reduces physical visits and saves time." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-4 border border-gray-100">
                <item.icon className="w-8 h-8 text-blue-300 mb-3" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When It Comes to Stationery, We Lead the Way */}
      <section className="bg-gray-100 py-14 font-mont px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            When It Comes to Stationery We Lead the Way
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm">
            {[
              { stat: "1590+", label: "Wholesale Sellers" },
              { stat: "96%", label: "Client Satisfaction" },
              { stat: "2000+", label: "Stationery Products" },
              { stat: "24/7", label: "Customer Support" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-100 text-black rounded-lg py-6 px-3 shadow">
                <h3 className="text-xl font-bold mb-1">{item.stat}</h3>
                <p className="leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto text-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              You Know Our Story - Get To Know the Experience!
            </h3>
            <p className="text-gray-700 mb-4">
              We simplify wholesale stationery purchase for businesses across India. Discover quality, reliability, and speed — whether you're selling or stocking up.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white text-sm font-medium py-2 px-5 rounded hover:bg-gray-800 transition"
            >
              Contact Now &raquo;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
