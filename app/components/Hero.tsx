'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* Sophisticated background with subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 lg:py-0 flex flex-col items-center justify-center min-h-screen">
        {/* Premium heading with elegant typography */}
        <div className="text-center space-y-6 max-w-4xl">
          {/* Subtitle with subtle accent */}
          <div className="inline-block">
            <p className="text-teal-300 text-sm lg:text-base font-semibold tracking-widest uppercase mb-4">
              Professional Healthcare Solutions
            </p>
          </div>

          {/* Main Headline - Premium Typography */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
            <span className="block mb-2">Your Health</span>
            <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Our Mission</span>
          </h1>

          {/* Descriptive tagline with premium feel */}
          <p className="text-lg lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Expert Pathology Testing & <span className="text-teal-300 font-semibold">Free Home Collection Service</span> for complete peace of mind
          </p>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-1 w-12 bg-gradient-to-r from-teal-400 to-transparent"></div>
            <span className="text-gray-400 text-sm font-medium">Trusted by 1000+ Families</span>
            <div className="h-1 w-12 bg-gradient-to-l from-teal-400 to-transparent"></div>
          </div>
        </div>

        {/* Premium CTA Button - WhatsApp Only */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="https://wa.me/919409277144?text=Hello%20City%20Pathology%20Laboratory%21%20I%20would%20like%20to%20book%20a%20test.%20Please%20help%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 lg:px-12 py-4 lg:py-5 text-base lg:text-lg font-bold rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300"></div>
            
            {/* Shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
            
            {/* Text with WhatsApp icon */}
            <span className="relative flex items-center gap-3 text-white whitespace-nowrap">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.89 1.234c-1.477.87-2.692 2.073-3.482 3.5-.79 1.426-1.087 2.89-1.087 4.476 0 1.586.297 3.05 1.087 4.476.79 1.427 2.005 2.63 3.482 3.5 1.477.87 3.113 1.234 4.89 1.234 1.777 0 3.413-.364 4.89-1.234 1.477-.87 2.692-2.073 3.482-3.5.79-1.426 1.087-2.89 1.087-4.476 0-1.586-.297-3.05-1.087-4.476-.79-1.427-2.005-2.63-3.482-3.5-1.477-.87-3.113-1.234-4.89-1.234z"/>
              </svg>
              <span>Connect on WhatsApp</span>
            </span>
          </a>
        </div>

        {/* Optional: Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
          <svg className="w-6 h-6 text-teal-300 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
