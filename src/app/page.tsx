'use client';

import HeroSection from "./components/HeroSection";
import Link from "next/link";
import { Truck, BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="font-mont">
      {/* Hero Banner */}
      <HeroSection />

      {/* Procurement Feature Section */}
      <section className="py-10 px-4 bg-[#eceef6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Effortless Online Procurement for Your Business Needs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/originals/bf/b5/44/bfb544abc3203a6e3cea4dfdcc5bd573.gif"
                alt="Procurement Illustration"
                className="w-full max-w-md sm:max-w-lg rounded-xl"
              />
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "With wholesale stationery suppliers online, businesses can unlock substantial cost savings, gaining access to quality stationery at competitive prices.", bg: "bg-blue-100" },
                { text: "Streamline procurement processes with the ease of online ordering, saving valuable time for businesses focused on core operations.", bg: "bg-white" },
                { text: "Request from a vast array of stationery products, ensuring businesses have access to a comprehensive selection tailored to their specific needs.", bg: "bg-white" },
                { text: "Benefit from streamlined inventory tracking, ensuring optimal stock levels and reducing administrative burdens.", bg: "bg-blue-100" },
              ].map((item, idx) => (
                <div key={idx} className={`${item.bg} p-4 rounded-xl text-sm text-gray-800 shadow-sm`}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-100 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            At our core, we believe great service should have no boundaries. That’s why we cater to organizations of every
            size and shape—from startups to India’s top financial institutions like 
            <span className="font-semibold"> HDFC Bank, Federal Bank, Sun Operations</span>, and more.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-10">
            <span className="font-semibold">No minimum order. No delivery limits.</span> Just consistently dependable
            service, tailored to your needs.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-center items-center">
            {[
              { name: "Sun Operations", src: "/logos/karnataka.jpg" },
              { name: "HDFC Bank", src: "/logos/hdfc.jpg" },
              { name: "Federal Bank", src: "/logos/federal bank.jpg" },
              { name: "Logo 3", src: "/logos/logo2.jpg" },
              { name: "Logo 1", src: "/logos/dtea.jpg" },
              { name: "Logo 2", src: "/logos/logo1.jpg" },
              { name: "Metro Shoes", src: "/logos/metroshoes.jpg" },
              { name: "Logo 4", src: "/logos/logo3.jpg" },
              { name: "Devil Truss", src: "/logos/deviltruss.jpg" },
              { name: "Aspiration", src: "/logos/aspiration.jpg" },
              { name: "Meraki", src: "/logos/meraki.jpg" },
              { name: "Reliance", src: "/logos/reliance.jpg" },
              { name: "Tata Motor", src: "/logos/tatamotor.jpg" },
              { name: "Tiwari House", src: "/logos/tiwarihouse.jpg" },
              { name: "Paptech", src: "/logos/paptech.jpg" },
            ].map((brand, index) => (
              <div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full overflow-hidden shadow flex items-center justify-center"
              >
                <img src={brand.src} alt={brand.name} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Categories</h2>
          <p className="text-gray-600 mb-10 text-sm">
            Explore a curated range of stationery tailored for all sectors — at competitive wholesale rates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Office Supplies",
              "School Essentials",
              "Art & Craft",
              "Files & Folders",
              "Writing Instruments",
              "Bulk Orders",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] text-left"
              >
                <h3 className="text-base font-semibold text-gray-800 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">
                  Shop bulk {category.toLowerCase()} with wholesale pricing and delivery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express Delivery Section */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck className="mx-auto text-blue-300 w-8 h-8 mb-2" />,
              title: "Express Delivery",
              text: "Fast, reliable delivery that keeps your business running smoothly without delays.",
            },
            {
              icon: <BadgeCheck className="mx-auto text-blue-300 w-8 h-8 mb-2" />,
              title: "Quality Check",
              text: "Every item meets strict durability and performance standards before reaching you.",
            },
            {
              icon: (
                <svg className="mx-auto text-blue-300 w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              ),
              title: "Support",
              text: "Friendly assistance to guide you through ordering, fulfillment, or queries.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed px-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Your Gateway to Wholesale Stationery. Get Started Today!
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm mb-6">
          Explore our extensive range of wholesale stationery tailored for every business. Unlock success with seamless
          service and quality products from Stationery Hut.
        </p>
        <Link href="/contact">
          <button className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-black hover:text-blue-300 transition font-semibold">
            Contact Now &raquo;
          </button>
        </Link>
      </section>
    </main>
  );
}
