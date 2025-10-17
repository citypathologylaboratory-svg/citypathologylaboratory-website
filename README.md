# City Pathology Laboratory Website

![City Pathology Laboratory Logo](/public/logo.jpg)

A modern, responsive website for City Pathology Laboratory built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean and professional interface
- **Responsive**: Works perfectly on all devices
- **Fast**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structure
- **Easy to Customize**: Well-organized code structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/citypathologylaboratory-svg/citypathologylaboratory-website.git

# Navigate to project directory
cd citypathologylaboratory-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
citypathologylaboratory-website/
├── app/
│   ├── about/          # About page
│   ├── book-appointment/ # Appointment booking page
│   ├── contact/        # Contact page
│   ├── tests/          # Tests/services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with header
│   └── page.tsx        # Homepage
├── public/
│   └── logo.jpg        # City Pathology Laboratory logo
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 📄 Pages

- **Home** (`/`): Landing page with overview and services
- **About** (`/about`): Information about the laboratory
- **Tests** (`/tests`): List of available medical tests
- **Book Appointment** (`/book-appointment`): Online appointment booking
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
