# City Pathology Laboratory Website

A modern, responsive website for City Pathology Laboratory built with Next.js 14, TypeScript, and Tailwind CSS. This website provides comprehensive information about laboratory services, online appointment booking via Calendly, and instant WhatsApp integration for customer support.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Online Booking**: Integrated Calendly for easy appointment scheduling
- **WhatsApp Integration**: Direct WhatsApp chat links for instant customer support
- **Comprehensive Test Catalog**: Detailed listing of all available laboratory tests with pricing
- **Doctor Profiles**: Showcase of expert pathologists with their qualifications and expertise
- **Contact Form**: Easy-to-use contact form for inquiries
- **SEO Optimized**: Built-in SEO optimization with meta tags and descriptions
- **Fast Performance**: Optimized for speed and performance using Next.js 14
- **Easy Deployment**: Ready for one-click deployment to Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
citypathologylaboratory-website/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About Us page
│   │   └── page.tsx
│   ├── book-appointment/         # Appointment booking page
│   │   └── page.tsx
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── tests/                    # Tests catalog page
│   │   └── page.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with navigation
│   └── page.tsx                  # Homepage
├── public/                       # Static assets (create this folder)
│   └── favicon.ico
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/citypathologylaboratory-svg/citypathologylaboratory-website.git
   cd citypathologylaboratory-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website

## ⚙️ Configuration

### WhatsApp Integration

1. Open the following files:
   - `app/layout.tsx`
   - `app/page.tsx`
   - `app/book-appointment/page.tsx`
   - `app/contact/page.tsx`

2. Replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number (including country code, without + or spaces)
   ```typescript
   // Example: For +1 (555) 123-4567, use:
   https://wa.me/15551234567
   ```

### Calendly Integration

1. Open `app/book-appointment/page.tsx`

2. Replace `YOUR_CALENDLY_USERNAME` with your actual Calendly username:
   ```typescript
   data-url="https://calendly.com/your-username"
   ```

3. To get your Calendly username:
   - Log in to your Calendly account
   - Go to your event type
   - Copy the username from your scheduling link

### Contact Information

Update contact details in:
- `app/layout.tsx` (footer)
- `app/contact/page.tsx` (contact page)
- `app/page.tsx` (homepage)

Replace placeholder contact information:
- Phone: `+1 (555) 123-4567`
- Email: `info@citypathlab.com`
- Address: Update in `app/contact/page.tsx`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This creates an optimized production build in the `.next` folder.

To test the production build locally:
```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. **Push your code to GitHub** (already done)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live in minutes!

4. **Configure Environment Variables** (if needed):
   - In your Vercel project dashboard
   - Go to Settings > Environment Variables
   - Add any required variables

### Alternative Deployment Options

- **Netlify**: Use the `npm run build` command and deploy the `.next` folder
- **AWS Amplify**: Connect your GitHub repository and configure build settings
- **Self-hosted**: Build the application and deploy using PM2 or Docker

## 🔧 Customization

### Colors

The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#e6f0ff',
    100: '#cce1ff',
    // ... customize these values
    900: '#001533',
  },
}
```

### Content

- **Homepage**: Edit `app/page.tsx`
- **About Us**: Edit `app/about/page.tsx`
- **Tests**: Update test listings in `app/tests/page.tsx`
- **Doctor Profiles**: Modify doctor information in `app/page.tsx` and `app/about/page.tsx`

### Navigation

Update navigation links in `app/layout.tsx`

## 📝 Pages

- **Home** (`/`): Landing page with hero section, Why Choose Us, doctor profiles, and services overview
- **About Us** (`/about`): Company information, mission, vision, values, and team details
- **Tests** (`/tests`): Comprehensive catalog of all available laboratory tests with pricing
- **Book Appointment** (`/book-appointment`): Online appointment booking with Calendly integration
- **Contact** (`/contact`): Contact form, location, hours, and WhatsApp integration

## 🆘 Support

For issues and questions:
- Open an issue on GitHub
- Contact: info@citypathlab.com
- WhatsApp: [Configure your number]

## 📄 License

This project is created for City Pathology Laboratory.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Appointment booking via [Calendly](https://calendly.com/)
- Icons and emojis for better UX

---

**Ready to deploy?** Push your changes to GitHub and deploy to Vercel with one click! 🚀
