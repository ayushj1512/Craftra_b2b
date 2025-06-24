'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
     {/* Hero Banner Section */}
<section
  className="relative font-mont"
  style={{
    backgroundImage: "url('/home-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>

  <div className="relative z-10 flex items-center min-h-[70vh] px-6 py-20">
    <div className="text-white max-w-xl text-left">
      <h1 className="text-3xl md:text-4xl font-bold pl-10 leading-tight mb-6">
        Your Trusted B2B Wholesalers
        <br />
        for Stationery Supplies
      </h1>
      <p className="pl-10 text-sm leading-relaxed mb-6">
        Need wholesale stationery for your business? Look no further — NewLakshiStore brings you a
        one-stop shop with ease of purchase and delivery. We specialize in delivering a wide range
        of stationery products across offices, schools, industries, and more — all at competitive bulk pricing.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-white text-black ml-10 px-6 py-2 text-sm px-auto rounded hover:bg-gray-200 transition font-semibold"
      >
        Request a Quote &raquo;
      </Link>
    </div>
  </div>
</section>


      {/* About Us Promo Section */}
      <section className="bg-white py-16 text-center font-mont px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Us</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            NewLakshiStore is your trusted wholesale stationery provider. We serve businesses of all sizes —
            from startups to India’s leading institutions. Our platform offers a seamless and efficient B2B purchasing
            experience for offices, schools, industries, and more. With over a decade of industry knowledge,
            we deliver personalized service and high-quality products to help streamline procurement.
          </p>
          <Link
            href="/about"
            className="bg-blue-300 text-black text-sm px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-blue-300 transition duration-300 ease-in-out shadow hover:shadow-md"
          >
            Read More &raquo;
          </Link>
          
        </div>
      </section>
    </>
  );
}
