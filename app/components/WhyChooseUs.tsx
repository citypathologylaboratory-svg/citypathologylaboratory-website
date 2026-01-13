'use client';

export default function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: 'Home Collection Service',
      description: 'We come to you - no need to visit the lab. Our friendly phlebotomist arrives at your doorstep with all necessary equipment.',
      emoji: '🚗',
      size: 'lg',
      color: 'from-emerald-400 to-teal-400'
    },
    {
      id: 2,
      title: 'Expert Testing',
      description: 'Professional pathologists ensure accurate, trustworthy results.',
      emoji: '🧑‍🔬',
      size: 'sm',
      color: 'from-orange-400 to-red-400'
    },
    {
      id: 3,
      title: 'Fast Results',
      description: 'Most test results delivered the same day.',
      emoji: '⚡',
      size: 'md',
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 4,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality.',
      emoji: '💰',
      size: 'md',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 5,
      title: 'Quality & Safety',
      description: 'Modern diagnostic equipment and strict safety protocols ensure the highest standards.',
      emoji: '✅',
      size: 'lg',
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 6,
      title: '20+ Years',
      description: 'Over two decades of trusted service to families in Halol.',
      emoji: '🏆',
      size: 'sm',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 7,
      title: 'Patient Care',
      description: 'Personalized attention, especially for elderly and critical cases.',
      emoji: '❤️',
      size: 'md',
      color: 'from-pink-400 to-rose-400'
    },
    {
      id: 8,
      title: 'Always Available',
      description: 'Mon-Sat: 8 AM - 8 PM for your convenience.',
      emoji: '⏰',
      size: 'sm',
      color: 'from-indigo-400 to-purple-400'
    }
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'lg':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'md':
        return 'col-span-1 md:col-span-2';
      case 'sm':
        return 'col-span-1';
      default:
        return 'col-span-1';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose City Pathology Laboratory?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by 1000+ families. Fast. Friendly. Reliable.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[280px]">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`${getSizeClasses(benefit.size)} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col justify-between bg-white/90 backdrop-blur-sm border border-gray-100 group-hover:border-gray-200 transition-colors">
                {/* Emoji Icon */}
                <div className="text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.emoji}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/citypathologylaboratory/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Appointment Today
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: slideUp 0.6s ease-out forwards;
        }

        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        .grid > div:nth-child(6) { animation-delay: 0.6s; }
        .grid > div:nth-child(7) { animation-delay: 0.7s; }
        .grid > div:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
}
