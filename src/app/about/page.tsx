'use client';

import {
  ClipboardDocumentCheckIcon,
  TruckIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import MissionVisionSection from '../components/MissionVisionSection';
import { useTheme } from '@/context/ThemeContext'; // ✅ adjust path if needed

export default function AboutPage() {
  const { primary } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-100 py-12 px-4 text-center font-mont">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">About Us</h1>
        <div className="mt-3 text-gray-600 text-sm">
          <span className="text-gray-800 font-medium">Home</span>
          <span className="mx-1">/</span>
          <span>About Us</span>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white px-4 font-mont">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
            Supplying Excellence — From Classrooms to Boardrooms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            NewLakshmiStore is your trusted wholesale stationery provider. We offer a diverse range of stationery
            products tailored for offices, industries, schools, and institutions. With a focus on quality, affordability,
            and seamless service, we help streamline your procurement process and reduce operational load.
          </p>

          {/* Mission & Vision */}
          <MissionVisionSection />
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="px-4 bg-gray-50 font-mont mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
            Why Buy Wholesale Stationery Online?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-12">
            If you're a business sourcing bulk stationery, here’s why NewLakshmiStore is your go-to supplier:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: ClipboardDocumentCheckIcon,
                text: 'Bulk online orders come with exclusive discounts, minimizing procurement expenses.',
              },
              {
                icon: TruckIcon,
                text: 'Our streamlined platform offers easy browsing, selection, and fast doorstep delivery.',
              },
              {
                icon: PencilSquareIcon,
                text: 'We offer a vast and evolving catalog of stationery essentials — all in one place.',
              },
              {
                icon: GlobeAltIcon,
                text: 'Pan-India reach: We serve businesses across every region with ease.',
              },
              {
                icon: Cog6ToothIcon,
                text: 'Bulk procurement reduces storage overhead, enhancing operational efficiency.',
              },
              {
                icon: UserIcon,
                text: 'Skip the market visits — order from your workspace and save time.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 mb-3" style={{ color: primary }} />
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA Section */}
      <section className="bg-blue-50 py-16 px-4 font-mont">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
            When It Comes to Stationery, We Lead the Way
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '1590+', label: 'Wholesale Sellers' },
              { stat: '96%', label: 'Client Satisfaction' },
              { stat: '2000+', label: 'Products Catalogued' },
              { stat: '24/7', label: 'Customer Support' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm rounded-xl py-6 px-4 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-1" style={{ color: primary }}>
                  {item.stat}
                </h3>
                <p className="text-gray-700 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto text-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              You Know Our Story — Now Experience Our Service
            </h3>
            <p className="text-gray-700 mb-4">
              We simplify bulk stationery purchases for businesses across India. Discover unmatched quality,
              reliability, and service whether you're buying for a small office or a nationwide chain.
            </p>
            <a
              href="/contact"
              className="inline-block text-white text-sm font-semibold py-2 px-6 rounded-full hover:opacity-90 transition duration-200"
              style={{ backgroundColor: primary }}
            >
              Contact Us &raquo;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
