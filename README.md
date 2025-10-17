# City Pathology Laboratory Website

A modern, responsive website for City Pathology Laboratory built with Next.js 13, TypeScript, and Tailwind CSS. This website provides easy access to pathology services, test information, online booking, and WhatsApp support.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Online Booking**: Integrated Calendly widget for easy appointment scheduling
- **WhatsApp Integration**: Direct WhatsApp chat support for instant communication ([+91 94092 77144](https://wa.me/919409277144))
- **Test Catalog**: Comprehensive listing of available pathology tests with pricing
- **Doctor Profiles**: Detailed information about experienced pathologists
- **Contact Form**: Easy-to-use contact form for inquiries
- **SEO Optimized**: Built with Next.js for excellent SEO performance

## 👨‍⚕️ Our Expert Pathologists

### Dr. Sunil Nagori
**Qualifications:** M.B.B.S., D.C.P., C.I.H.  
**Designation:** Consultant Pathologist and Industrial Physician

Dr. Sunil Nagori specializes in clinical pathology and occupational health with extensive experience in diagnostic services. His expertise ensures accurate diagnoses and comprehensive patient care.

### Dr. Shalin Nagori
**Qualifications:** M.B.B.S., M.D.(Path), P.G.C.I.H.  
**Designation:** Consultant Pathologist and Industrial Physician

Dr. Shalin Nagori is an expert in anatomical and clinical pathology with postgraduate certification in industrial health. His dedication to excellence in diagnostic medicine ensures reliable and precise test results.

## 📦 Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready
- **Booking**: Calendly Integration
- **Communication**: WhatsApp Direct Link Integration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/citypathologylaboratory-svg/citypathologylaboratory-website.git
cd citypathologylaboratory-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📝 Configuration

### WhatsApp Integration

The WhatsApp number is configured in multiple locations:
- Homepage hero section
- Navigation bar
- Contact page
- About page

To update the WhatsApp number, search for `919409277144` in the codebase and replace with your number.

### Calendly Integration

The booking system uses Calendly. To update:
1. Sign up for Calendly at [calendly.com](https://calendly.com)
2. Get your Calendly scheduling link
3. Update the `NEXT_PUBLIC_CALENDLY_URL` in your environment variables
4. The link is used in `app/book-appointment/page.tsx`

## 📄 Pages

- **Home** (`/`): Main landing page with services overview, doctor profiles, and call-to-action
- **About** (`/about`): Information about the laboratory, mission, values, and pathologists
- **Services** (`/services`): Detailed list of pathology services
- **Tests** (`/tests`): Comprehensive test catalog with descriptions and pricing
- **Book Appointment** (`/book-appointment`): Integrated Calendly booking widget
- **Contact** (`/contact`): Contact form and location information

## 🎨 Customization

### Colors

The website uses a primary color scheme defined in `tailwind.config.js`. To customize:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... add your custom colors
      }
    }
  }
}
```

### Content

All content can be easily updated in the respective page files under the `app` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables if needed
4. Deploy!

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📞 Contact Information

**WhatsApp:** [+91 94092 77144](https://wa.me/919409277144)  
**Website:** City Pathology Laboratory

## 📄 License

This project is private and proprietary to City Pathology Laboratory.

## 🤝 Contributing

For internal contributions, please follow the standard Git workflow:
1. Create a feature branch
2. Make your changes
3. Submit a pull request for review

---

**Built with ❤️ for City Pathology Laboratory**
