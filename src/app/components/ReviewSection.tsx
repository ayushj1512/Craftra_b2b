'use client';

import { useRef, useEffect } from 'react';
import { BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';
import '../styles/scrollStyles.css';

const reviews = [
    {
        org: 'Federal Bank Ltd',
        name: 'Ramesh Krishnan',
        review:
            'Their efficient delivery and professional service help us keep multiple branches stocked with essential supplies without delays.',
        highlights: ['Multi-branch support', 'On-time delivery'],
    },
    {
        org: 'Federal Bank Ltd National Credit Hub',
        name: 'Sneha Deshpande',
        review:
            'All marketing and operational print needs are handled seamlessly. The team understands our compliance and branding guidelines perfectly.',
        highlights: ['Compliance ready', 'Brand consistency'],
    },
    {
        org: 'HDFC Bank',
        name: 'Ankush Mehta',
        review:
            'Exceptional quality and timely logistics. They handle our documentation folders, ID cards, and branded signage reliably.',
        highlights: ['Secure materials', 'Reliable logistics'],
    },
    {
        org: 'Canara Bank',
        name: 'Pooja Nair',
        review:
            'Professional and detail-oriented—our stationary, signage, and printed forms are always delivered on time and accurately.',
        highlights: ['Professional service', 'Error-free printing'],
    },
    {
        org: 'Karnataka Bank Ltd.',
        name: 'Satish Rao',
        review:
            'We trust them for every branch opening and routine requirements. Their design support and supply chain efficiency stand out.',
        highlights: ['Branch launch support', 'Efficient service'],
    },
    {
        org: 'DBS Bank India Ltd.',
        name: 'Neelima Arora',
        review:
            'From visitor badges to custom folders, their quality and consistency help us maintain a premium customer experience.',
        highlights: ['Premium quality', 'Custom solutions'],
    },
    {
        org: 'National Insurance Company',
        name: 'Mohit Taneja',
        review:
            'The go-to vendor for all our policy booklets, envelopes, and customer documents. Professional and reliable team.',
        highlights: ['Policy printing', 'Document accuracy'],
    },
    {
        org: 'Metro Brands Ltd. KAROL BAGH',
        name: 'Sonal Mehta',
        review:
            'For all our branding, in-store signage, and packaging needs, they’ve delivered with speed and style.',
        highlights: ['Retail branding', 'Custom packaging'],
    },
    {
        org: 'Metro Brands Ltd. Rohini',
        name: 'Harshit Arora',
        review:
            'We appreciate their fast turnaround, especially during seasonal promotions. Print quality is always top-notch.',
        highlights: ['Seasonal readiness', 'Print quality'],
    },
    {
        org: 'M/S Emerald Jewel Industry IndIa LTD.',
        name: 'Rajeev Sinha',
        review:
            'Their premium-quality boxes, tags, and certification cards meet our luxury product standards. Highly recommended.',
        highlights: ['Luxury packaging', 'Certification print'],
    },
    {
        org: 'Honasa Constructions Pvt Ltd',
        name: 'Mehul Chopra',
        review:
            'Site signage, safety boards, and internal documentation—we source everything from them. Durable and clear prints.',
        highlights: ['Construction-grade', 'Durable signage'],
    },
    {
        org: 'FORE School OF Management',
        name: 'Amit Saxena',
        review:
            'All our seminar folders, ID cards, and event materials come from them. Quality and timeliness are excellent.',
        highlights: ['Event materials', 'Academic branding'],
    },
    {
        org: 'Lakshmibai College',
        name: 'Dr. Anuja Bhatia',
        review:
            'From internal reports to student handbooks, they’ve been our trusted partner. Print clarity is great.',
        highlights: ['Educational materials', 'Clear printing'],
    },
    {
        org: 'Andhra Education Society School',
        name: 'Revathi Pillai',
        review:
            'They supply exam sheets, registers, and school branding items promptly. Ideal partner for school printing.',
        highlights: ['School essentials', 'Quick service'],
    },
    {
        org: 'Chowgule Public School',
        name: 'Suresh Rathi',
        review:
            'The planners and stationery packs are of great quality. They even support customized items for annual events.',
        highlights: ['Custom school kits', 'Reliable partner'],
    },
    {
        org: 'Carborundum Universal Limited',
        name: 'Prakash Nair',
        review:
            'Our product manuals and branded supplies are always printed precisely and delivered securely.',
        highlights: ['Technical printing', 'Secure delivery'],
    },
    {
        org: 'Department of Surgery, ESIC Hospital',
        name: 'Dr. Sushil Menon',
        review:
            'Patient forms, case labels, and printed guides are always delivered on priority. Good for critical environments.',
        highlights: ['Medical forms', 'Urgent dispatch'],
    },
    {
        org: 'Paptech India Private Limited',
        name: 'Rekha Goyal',
        review:
            'We’ve streamlined our vendor communication materials with their help. Professional layouts and binding.',
        highlights: ['Vendor kits', 'Professional layout'],
    },
    {
        org: 'Pacific Mall',
        name: 'Shruti Desai',
        review:
            'Their large-format banners and in-mall directories stand out in quality and color consistency. Highly creative team.',
        highlights: ['Large format', 'Vibrant output'],
    },
    {
        org: 'Manchanda Herbal Products Pvt Ltd',
        name: 'Karan Manchanda',
        review:
            'Our product labels, shipping boxes, and inserts are printed with eco-friendly materials. Great support!',
        highlights: ['Eco-friendly print', 'Product packaging'],
    },
];


export default function ReviewSection() {
    const { primary, accent3 } = useTheme();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const speed = 0.5;
        let frameId: number;

        const animate = () => {
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += speed;
            }
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <section className="py-20 px-4 md:px-12 font-mont bg-gradient-to-br from-[#f6f9fc] to-[#e9f0f8]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: primary }}>
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 text-center text-base mb-10">Trusted by brands and institutions across India</p>

                <div ref={scrollRef} className="overflow-x-hidden scroll-smooth hide-scrollbar">
                    <div className="flex flex-nowrap gap-6 w-max">
                        {[...reviews, ...reviews].map((item, idx) => (
                            <div
                                key={idx}
                                className="w-[280px] h-[300px] bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex-shrink-0 flex flex-col justify-between hover:shadow-2xl transition duration-300 text-left"
                            >
                                <div className="overflow-hidden">
                                    <div className="flex items-center text-sm font-medium text-gray-800 mb-2">
                                        <BuildingOfficeIcon className="w-4 h-4 mr-2 text-[color:var(--primary)]" />
                                        <span
                                            className="font-semibold truncate"
                                            style={{ color: primary }}
                                        >
                                            {item.org}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500 mb-3">
                                        <UserIcon className="w-3 h-3 mr-1 text-gray-400" />
                                        <span className="truncate">{item.name}</span>
                                    </div>
                                    <p className="text-gray-700 text-[15px] leading-snug line-clamp-5 break-words pr-1">
                                        {item.review}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.highlights.map((point, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-full text-[10px] font-semibold bg-opacity-20 shadow-sm"
                                            style={{
                                                backgroundColor: accent3 + '30',
                                                color: accent3,
                                            }}
                                        >
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
