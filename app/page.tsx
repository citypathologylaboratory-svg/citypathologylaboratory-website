export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                <span className="text-emerald-700 text-2xl">✓</span>
                <span className="text-emerald-800 text-sm font-semibold">Trusted Since 1990 • 35+ Years of Excellence</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health,
                <span className="text-blue-600"> Our Priority</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Advanced diagnostic services with cutting-edge technology, expert pathologists, and accurate results you can trust.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">N</span>
                  </div>
                  <span className="font-medium">NABL Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">N</span>
                  </div>
                  <span className="font-medium">NABH Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1M+</span>
                  </div>
                  <span className="font-medium">Patients Served</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <span>📅</span>
                  Book Appointment
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <span>💬</span>
                  WhatsApp Us
                </button>
              </div>
              
              {/* FNAC Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 rounded-lg shadow-lg">
                <span className="text-white font-bold text-sm tracking-wide">🔬 FNAC TEST AVAILABLE</span>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/86685960/36f7bea1-5d9b-46b0-99e8-4c28b33e1148/image.jpg?AWSAccessKeyId=ASIA2F3EMEYE2XYIALCW&Signature=%2F%2FqK4HEn8o9vzgWmWKeyokcWW%2Fk%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGTQbvTnjRmdZ0Isv6JhRTW5SMeZ0Aoh0g%2Fx1i%2FkBPqVAiAHGYdX2oE%2BqGUiyY%2B09bHzvJj2djTt0SJx1FevM3Zx7ir8BAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDY5OTc1MzMwOTcwNSIMNFjj4hrDK2G4wpnRKtAEw8i2oa%2F3gOZ3adabhBaMGJPjtZ4aAxFzPUGbbCp95pLbbHG%2BQKyhj7ZJx1xLPnZbvSCJ%2B4%2FX%2FcRLQTug%2BYkKk80lAF9QoHABrgLITxs%2B8S1Xjjuz4UiH9LfPeOWocHNWz9JPi%2BWCoUeSj%2FXGTRt4354jEHshiGGhq0AXkXFULwkNaPJTU75aYPEsBIh8n%2F7iORlJTKNqvKPWFi%2FTP0d27LkVk0grgLPCgxgR2IDCAYaUz0ZFZOf5PD3hcp9y%2F1fwtyH%2F%2FVRuUP3LGURFC7PYhZkuI2csgosT3rfKR%2BugeTg%2FZ%2F7AYO5E5jjy2E2ku75IhYPPoqLRRye2LBxig9%2FYF8ixaBOBSC3PP01Qy63YaB2HLGioy9TOX0CoU%2BEkj0EhDP648F9qhdgz5npmU7B7OXNgQWgPo7efIM023UFCFoLnS4ftNCePE19Lg%2FaQjvL1XEArymLJ9wSL%2BpbsF53Wi2H%2BjdOeOPHqvgkSr13Q3mzn9mAJsKCzzplpCuPw8z%2FpuTHPiWfP1mh2ghVJ2LqYg9WEjfYCzRAJzTkp4auY7PNUZVM0nsV4G7ip9jw%2FUDFMA4Y4ajRmLID%2F86shCAdUCrNkMFZ9mJEeU2m2NFFHtyVlZG%2BI5AdwGz5Cu%2BtaceK%2BKe1WbtQ%2FbIqMtwIyBpcZ%2FF9n154650NkHYO%2F%2FLwGmkbM2IAVvP0WNY9ok%2FY7FMc8rmvUIq0F07MrU0YgDDRA80GDFD0lgMgpEH3RzNVo5fE%2BH%2FIX%2F0DAEuvP2GvkJvnyw%2Fwk%2BAylfLbVCT53axu0xjCWwf3HBjqZASsLAcm77ySdLoap54q2pP%2FS%2BeA7%2FZjEntsmM2lpWienzObj35rgZx%2FFCtkX%2FXfjTZrxeAG4wAxiD%2BQ5JSRxoLcsoj2L3V9LwqvF95jsMD9bdFjEbibWa86Gyerqfjru3Ah2eS%2FHmlIL767XeWNz9Nf1zWURJW0LhlXLgJ%2BvK%2FIjUHIUXKQrUGKY%2FI5twOE%2ByfpXQI1AJQNAUQ%3D%3D&Expires=1761567701"
                  alt="Professional medical laboratory staff"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Feature Cards */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Quick Results</p>
                    <p className="text-xs text-gray-600">Same day reports</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Expert Team</p>
                    <p className="text-xs text-gray-600">Certified pathologists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Cards Below Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Results</h3>
              <p className="text-sm text-gray-600">Get your reports within 24 hours with our fast turnaround service.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Certified pathologists with decades of combined experience.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online Reports</h3>
              <p className="text-sm text-gray-600">Access your reports anytime, anywhere through our secure portal.</p>
            </div>
          </div>
        </div>
      </section>
