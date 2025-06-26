'use client';

import { ClipboardDocumentCheckIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext'; // Adjust the path based on your structure

export default function MissionVisionSection() {
  const { primary, accent2, accent3 } = useTheme();

  return (
    <section className="w-full bg-white  px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
    

        <div className="space-y-24 text-gray-700">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ClipboardDocumentCheckIcon className="w-14 h-14 flex-shrink-0" style={{ color: primary }} />
            <div>
              <p className="uppercase text-lg tracking-wider font-semibold mb-2" style={{ color: primary }}>
                Our Mission
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Empowering India’s Institutions with Dependable Stationery & Printing
              </h3>
              <p className="text-lg leading-relaxed">
                We are committed to providing reliable, high-quality stationery and printing solutions that support the
                day-to-day operations of institutions and businesses across India. With roots stretching back to the
                1960s, our mission is to meet the evolving needs of clients—from schools seeking educational supplies
                to corporates requiring full-spectrum office essentials. We deliver excellence consistently—regardless
                of order size or sector.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <EyeIcon className="w-14 h-14 flex-shrink-0" style={{ color: accent2 }} />
            <div>
              <p className="uppercase text-lg tracking-wider font-semibold mb-2" style={{ color: accent2 }}>
                Our Vision
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Building a Future-Ready, Trusted B2B Supply Partner
              </h3>
              <p className="text-lg leading-relaxed">
                We envision being the most trusted and adaptable B2B partner for stationery and printing needs.
                Continuing a legacy of six decades, we aim to create a future where every client—from classrooms to
                boardrooms—receives seamless service, dependable products, and unwavering support. Rooted in experience
                and driven by innovation, we’re building a supply chain that scales with trust and quality.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="p-6 md:p-8 rounded-xl shadow-sm border"
            style={{
              backgroundColor: accent3 + '20', // ~12% opacity background
              borderColor: accent3 + '40',
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: accent3 }}>
              Your Trusted B2B Partner. Contact us Today!
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              Born from a passion for quality and service in the 1960s, we've grown from fulfilling daily school supply
              needs to becoming a nationwide name in stationery and printing solutions. Our catalog spans everything
              from office basics to specialty products—school stationery, competitive exam books, art & craft
              essentials, branded supplies, custom-printed materials, and more.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-800">
              What sets us apart? A sharp eye for hard-to-find items, curated collections exclusive to us, and an
              unwavering commitment to timely service—no matter your industry or order size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
