'use client';

import HeroSection from "./components/HeroSection";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { primary, accent1, accent2 } = useTheme();

  return (
    <main className="font-mont text-gray-800">
      {/* Hero Banner */}
      <HeroSection />

      {/* Supplying Excellence Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: primary + "15" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Supplying Excellence – From Classrooms to Boardrooms
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            At our core, we believe great service should have no boundaries. That’s why we cater to organizations of every
            size and shape—from small startups and boutique firms to India’s top financial institutions. With clients like
            <span className="font-semibold"> HDFC Bank, Federal Bank, Sun Operations</span>, as well as renowned schools,
            event management firms, LLPs, SMEs, and a diverse mix of private enterprises, we’ve built a reputation for
            reliability, speed, and flexibility.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <span className="font-semibold">No minimum order. No delivery limits. Just consistently dependable service, tailored to your needs. Whether you're ordering a handful of essentials or sourcing supplies in bulk, we’ve got the scale and experience to deliver—on time, every time.</span>

          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white mt-8 mb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
            New Lakshmi Store is your trusted B2B partner. We serve businesses of all sizes — from startups to India’s leading institutions. We offer seamless and efficient purchasing experience for offices, schools, industries, and more. With over 6 decades of industry knowledge, we deliver personalized service and high-quality products to help streamline procurement.
          </p>
          <Link
            href="/about"
            className="inline-block px-5 py-2 text-sm font-semibold rounded-full transition shadow hover:shadow-md"
            style={{
              backgroundColor: accent1,
              color: "#fff",
            }}
          >
            Read More &raquo;
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: primary + '15' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-base text-justify sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
            With roots dating back to the 1960s, we've built a legacy of trust through decades of dedicated service to schools and corporations alike. From daily stationery needs to full-spectrum printing solutions, our expertise spans generations and industries. No order too small, no client too big—we deliver with consistency, speed, and a deep understanding of what businesses truly need. That’s why India’s leading institutions continue to choose us as their go-to B2B vendor.
          </p>

          {/* Logos Grid */}
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
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
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full overflow-hidden shadow flex items-center justify-center mx-auto"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Categories</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-10">
            Explore a curated range of stationery tailored for all sectors — at competitive  rates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Corporate Stationery & Office Solutions',
                desc: 'We deliver everything from A4 paper to full-scale office kits—trusted by top firms, banks, and LLPs for speed, scale, and zero-order-limit flexibility.',
              },
              {
                title: 'Event & Marketing Essentials',
                desc: 'Supporting event firms with high-quality printed materials, customized supplies, and creative stationery that adds polish to every campaign or activation.',
              },
              {
                title: 'SMEs & Startup Support',
                desc: 'No business is too small—our flexible service model helps new ventures and growing firms scale smoothly with reliable, cost-effective supply solutions.',
              },
              {
                title: 'School Supplies & Printing Services',
                desc: 'From daily classroom essentials to custom printing of question papers, registers, and forms—we’ve supported schools since the 1960s with dependable, tailored service.',
              },
              {
                title: 'General & Competitive Exam Books',
                desc: 'Your one-stop source for school textbooks and entrance exam prep—from foundational academics to university-level guides for aspiring achievers.',
              },
              {
                title: 'Custom Printing & Branding Services',
                desc: 'From letterheads to branded folders and institutional printing, we craft professional-grade materials that elevate your brand across every touchpoint.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg shadow-sm p-5 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Your Gateway to  Stationary. Get Started Today!
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6">
          Explore our extensive range of  stationery tailored for every business. Unlock success with seamless
          service and quality products from New Lakshmi Store.
        </p>
        <Link href="/contact">
          <button
            className="px-5 py-2 text-sm font-semibold rounded-full hover:opacity-90 transition shadow-md hover:shadow-lg"
            style={{ backgroundColor: accent2, color: "#fff" }}
          >
            Reach out to us &raquo;
          </button>
        </Link>
      </section>
    </main>
  );
}
