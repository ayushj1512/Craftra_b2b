'use client';

import HeroSection from "./components/HeroSection";
import Link from "next/link";
import { Truck, BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="font-mont">
      {/* Hero Banner */}
      <HeroSection />
  {/* Procurement Feature Section - Final Refined Version */}
<section className="py-10 px-6 bg-[#eceef6] font-mont">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Effortless Online Procurement for Your Business Needs
    </h2>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src="https://i.pinimg.com/originals/bf/b5/44/bfb544abc3203a6e3cea4dfdcc5bd573.gif"
          alt="Procurement Illustration"
          className="w-full max-w-3xl rounded-xl"
        />
      </div>

      {/* Right Content Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
        <div className="bg-blue-100 p-4 rounded-xl text-sm text-gray-800 shadow-sm">
          With wholesale stationery suppliers online, businesses can unlock substantial cost savings,
          gaining access to quality stationery at competitive prices.
        </div>
        <div className="bg-white p-4 rounded-xl text-sm text-gray-800 shadow-sm">
          Streamline procurement processes with the ease of online ordering, saving valuable time for businesses
          focused on core operations.
        </div>
        <div className="bg-white p-4 rounded-xl text-sm text-gray-800 shadow-sm">
          Request from a vast array of stationery products, ensuring businesses have access to a comprehensive
          selection tailored to their specific needs.
        </div>
        <div className="bg-blue-100 p-4 rounded-xl text-sm text-gray-800 shadow-sm">
          Benefit from streamlined inventory tracking, ensuring optimal stock levels and reducing administrative burdens.
        </div>
      </div>
    </div>
  </div>
</section>





      {/* Why Choose Us Section */}
      <section className="bg-blue-100 py-20 px-6 font-mont">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            At our core, we believe great service should have no boundaries. That’s why we cater to organizations of every
            size and shape—from small startups and boutique firms to India’s top financial institutions. With clients like
            <span className="font-semibold"> HDFC Bank, Federal Bank, Sun Operations</span>, as well as renowned schools,
            event management firms, LLPs, SMEs, and a diverse mix of private enterprises, we’ve built a reputation for
            reliability, speed, and flexibility.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-10">
            <span className="font-semibold">No minimum order. No delivery limits.</span> Just consistently dependable
            service, tailored to your needs. Whether you're ordering a handful of essentials or sourcing supplies in bulk,
            we’ve got the scale and experience to deliver—on time, every time.
          </p>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { name: "Sun Operations", src: "/logos/karnataka.jpg", size: "w-28 h-28", zoom: "scale-130" },
              { name: "HDFC Bank", src: "/logos/hdfc.jpg", size: "w-32 h-32", zoom: "scale-125" },
              { name: "Federal Bank", src: "/logos/federal bank.jpg", size: "w-28 h-28", zoom: "scale-110" },
              { name: "Logo 3", src: "/logos/logo2.jpg", size: "w-22 h-22", zoom: "scale-125" },
              { name: "Logo 1", src: "/logos/dtea.jpg", size: "w-22 h-22", zoom: "scale-115" },
              { name: "Logo 2", src: "/logos/logo1.jpg", size: "w-20 h-20", zoom: "scale-120" },
              { name: "Metro Shoes", src: "/logos/metroshoes.jpg", size: "w-32 h-32", zoom: "scale-125" },
              { name: "Logo 4", src: "/logos/logo3.jpg", size: "w-28 h-28", zoom: "scale-110" },
              { name: "Devil Truss", src: "/logos/deviltruss.jpg", size: "w-30 h-30", zoom: "scale-120" },
              { name: "Aspiration", src: "/logos/aspiration.jpg", size: "w-24 h-24", zoom: "scale-115" },
              { name: "Meraki", src: "/logos/meraki.jpg", size: "w-30 h-30", zoom: "scale-135" },
              { name: "Reliance", src: "/logos/reliance.jpg", size: "w-34 h-34", zoom: "scale-140" },
              { name: "Tata Motor", src: "/logos/tatamotor.jpg", size: "w-22 h-22", zoom: "scale-130" },
              { name: "Tiwari House", src: "/logos/tiwarihouse.jpg", size: "w-28 h-28", zoom: "scale-110" },
              { name: "Paptech", src: "/logos/paptech.jpg", size: "w-36 h-36", zoom: "scale-120" },
            ].map((brand, index) => (
              <div
                key={index}
                className={`w-24 h-24 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center transition-transform duration-300 hover:${brand.zoom}`}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`object-cover ${brand.size}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Our Categories */}
      <section className="py-16 px-4 font-mont">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Categories</h2>
          <p className="text-gray-600 mb-10 text-sm">
            Explore a curated range of stationery tailored for offices, educational institutions, industries, and more —
            all available at competitive wholesale rates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                className="bg-white border border-gray-100 rounded-lg shadow-md p-5 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">
                  Shop bulk {category.toLowerCase()} with wholesale pricing and reliable delivery options.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Express Delivery + Quality Check + Support - Compact */}
<section className="bg-gray-50 py-12 px-4 text-center font-mont">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div>
      <Truck className="mx-auto text-blue-300 w-8 h-8 mb-2" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Express Delivery</h3>
      <p className="text-gray-600 text-xs leading-relaxed px-2">
        Fast, reliable delivery that keeps your business running smoothly without delays.
      </p>
    </div>

    <div>
      <BadgeCheck className="mx-auto text-blue-300 w-8 h-8 mb-2" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Check</h3>
      <p className="text-gray-600 text-xs leading-relaxed px-2">
        Every item meets strict durability and performance standards before reaching you.
      </p>
    </div>

    <div>
      <svg className="mx-auto text-blue-300 w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
      <p className="text-gray-600 text-xs leading-relaxed px-2">
        Friendly assistance to guide you through ordering, fulfillment, or queries.
      </p>
    </div>

  </div>
</section>


      {/* CTA Section */}
      <section className="bg-white py-16 px-6 text-center font-mont">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Gateway to Wholesale Stationery. Get Started Today!
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm mb-8">
          Explore our extensive range of wholesale stationery, tailored for offices, industries, schools, and colleges.
          Elevate your operations with quality products, unbeatable prices, and seamless online ordering. Unlock success
          with Stationery Hut as your trusted partner for reliable service and excellence in every supply. Get in touch
          with us today!
        </p>
        <Link href="/contact">
          <button className="bg-blue-300 text-black px-3 py-2 rounded hover:bg-black hover:text-blue-300 transition font-semibold">
            Contact Now &raquo;
          </button>
        </Link>
      </section>
    </main>
  );
}
