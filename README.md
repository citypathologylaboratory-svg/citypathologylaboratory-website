# City Pathology Laboratory Website

A modern, responsive website for City Pathology Laboratory built with Next.js 13, TypeScript, and Tailwind CSS. This website provides easy access to pathology services, test information, online booking, and WhatsApp support.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Online Booking**: Integrated Calendly widget for easy appointment scheduling
- **WhatsApp Integration**: Direct WhatsApp chat support for instant communication ([+91 94092 77144](https://wa.me/919409277144))
- **Test Catalog**: Comprehensive listing of available pathology tests with pricing
- **Doctor Profiles**: Information about experienced pathologists
- **Contact Form**: Easy-to-use contact form for inquiries
- **SEO Optimized**: Built with Next.js for excellent SEO performance

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

The WhatsApp number is already configured throughout the website:
- **Number**: +91 94092 77144
- **Link Format**: `https://wa.me/919409277144`
- **Locations**: Homepage, Contact page, Book Appointment page
- **Label**: "WhatsApp for Appointments, Bookings, Queries"

To update the WhatsApp number in the future, search and replace `919409277144` with your new number (without spaces or special characters).

### Calendly Integration

Update your Calendly username in `app/book-appointment/page.tsx`:
```typescript
data-url="https://calendly.com/YOUR_CALENDLY_USERNAME?hide_gdpr_banner=1"
```

### Customization

#### Content Updates
- **Homepage**: Edit `app/page.tsx`
- **About Us**: Edit `app/about/page.tsx`
- **Tests**: Update test listings in `app/tests/page.tsx`
- **Doctor Profiles**: Modify doctor information in `app/page.tsx` and `app/about/page.tsx`

#### Navigation

Update navigation links in `app/layout.tsx`

## 📝 Pages

- **Home** (`/`): Landing page with hero section, Why Choose Us, doctor profiles, and services overview
- **About Us** (`/about`): Company information, mission, vision, values, and team details
- **Tests** (`/tests`): Comprehensive catalog of all available laboratory tests with pricing
- **Book Appointment** (`/book-appointment`): Online appointment booking with Calendly integration
- **Contact** (`/contact`): Contact form, location, hours, and WhatsApp integration

## 🎨 Color Scheme

The website uses a professional medical color palette:
- Primary: Blue tones (#0369a1, #075985)
- Accent: Green for WhatsApp integration (#22c55e)
- Background: White and light gray (#f9fafb)

## 📱 WhatsApp Features

- **Direct Chat Links**: Clicking WhatsApp buttons opens chat directly
- **Pre-filled Messages**: Some links include pre-filled inquiry messages
- **Availability**: Marked as 24/7 available for patient convenience
- **Multiple Access Points**: Available on homepage, contact page, and booking page

## 🚀 Deployment

The website is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings
4. Your website will be live instantly!

## 🆘 Support

For issues and questions:
- Open an issue on GitHub
- Contact: info@citypathlab.com
- WhatsApp: [+91 94092 77144](https://wa.me/919409277144) - WhatsApp for Appointments, Bookings, Queries

## 📄 License

This project is created for City Pathology Laboratory.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Appointment booking via [Calendly](https://calendly.com/)
- Icons and emojis for better UX

---

**Ready to deploy?** Push your changes to GitHub and deploy to Vercel with one click! 🚀
