'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 opacity-80 pointer-events-none" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 md:flex-row md:py-20">
        {/* LEFT: Text content */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <p className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
            Home Collection Available
          </p>

          <h1 className="text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            ف्लेवरीटोमिक्स के साथ{" "}
            <span className="text-sky-700">
              घर बैठे ही पैथोलॉजी टेस्ट करवाइए
            </span>
          </h1>

          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            अच्छी तरह से प्रशिक्षित, प्रॉपरली ड्रेस्ड फ्लेवरीटोमिक्स आपके घर
            आकर सैंपल कलेक्ग करेगा –{" "}
            <span className="font-semibold text-slate-800">
              सेड, हामगआउंसत, और समय पर वब रराज के साथ।
            </span>
          </p>

          <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              NABL‑स्तर लैब इन्फ्रास्थेवकारी
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Trained & Verified फ्लेवरीटोमिक्स
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Mehsana & आसपास के क्षेत्र में सेवा
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              रिपॉर्स WhatsApp / ई‑मेल पर उपलब्ध
            </li>
          </ul>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
            >
              WhatsApp पर Home Collection बुक करें
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16.003 3.2c-7.062 0-12.8 5.737-12.8 12.8 0 2.257.589 4.449 1.712 6.383L3.2 28.8l6.604-1.683A12.738 12.738 0 0 0 16.003 28.8c7.063 0 12.8-5.737 12.8-12.8s-5.737-12.8-12.8-12.8Zm0 2.4c5.746 0 10.4 4.654 10.4 10.4s-4.654 10.4-10.4 10.4a10.3 10.3 0 0 1-5.24-1.47l-.376-.224-3.916 1.001 1.04-3.8-.245-.391A10.29 10.29 0 0 1 5.6 16c0-5.746 4.654-10.4 10.403-10.4Zm-4.19 4.8a1.1 1.1 0 0 0-1.01.595c-.26.5-.686 1.48-.686 2.157 0 .663.35 1.522.998 2.388.62.831 1.7 2.034 3.55 3.19 2.189 1.373 3.952 1.734 4.91 1.734.676 0 1.51-.318 1.77-.904.222-.495.55-1.524.55-1.524a.8.8 0 0 0-.406-.955l-2.002-.928a.9.9 0 0 0-1.047.21l-.635.774a.7.7 0 0 1-.792.21c-.424-.167-1.65-.71-2.643-1.695-.95-.943-1.45-2.113-1.642-2.586a.7.7 0 0 1 .137-.747l.553-.611a.9.9 0 0 0 .131-1.028l-.928-1.912a.9.9 0 0 0-.81-.51Z" />
              </svg>
            </a>

            <p className="text-xs text-slate-500">
              Direct WhatsApp पर कनेक्स्म होंगे – कमई call center नहीं।
            </p>
          </div>
        </div>

        {/* RIGHT: Scooter animation */}
        <div className="relative mt-6 flex flex-1 items-end justify-center md:mt-0">
          {/* Road line */}
          <div className="absolute bottom-4 left-4 right-4 h-[2px] rounded-full bg-sky-200 md:bottom-6" />

          {/* Animated scooter + phlebotomist */}
          <div className="relative h-48 w-full max-w-md md:h-56">
            <div className="absolute inset-x-[-40%] bottom-0 animate-scooter">
              <div className="mx-auto flex max-w-xs items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-xl ring-1 ring-sky-100">
                {/* circular avatar placeholder */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                  <span className="text-xs font-semibold text-sky-800">CPT</span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-900">
                    City Path Lab फ्लेवरीटोमिक्स
                  </p>
                  <p className="text-[11px] text-slate-600">
                    "मैं 15 अयल में आपके घर पर sample collect करने पहुंअ रहा हूँ."  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button bottom-right */}
      <a
        href="https://wa.me/919409277144"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50 md:bottom-6 md:right-6"
        aria-label="WhatsApp पर City Pathology Laboratory से बात करें"
      >
        {/* WhatsApp icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-6 w-6"
          fill="currentColor"
        >
          <path d="M16.003 3.2c-7.062 0-12.8 5.737-12.8 12.8 0 2.257.589 4.449 1.712 6.383L3.2 28.8l6.604-1.683A12.738 12.738 0 0 0 16.003 28.8c7.063 0 12.8-5.737 12.8-12.8s-5.737-12.8-12.8-12.8Z" />
        </svg>
      </a>
    </section>
  );
}
