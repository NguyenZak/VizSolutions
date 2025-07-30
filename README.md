# Ashley - Creative Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project is a conversion from the original HTML/CSS/JS website to a modern React-based application.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Performance Optimized**: Fast loading times and optimized for SEO
- **Modern UI/UX**: Clean, professional design with hover effects and transitions
- **Component-Based Architecture**: Reusable components for maintainability

## 📁 Project Structure

```
viz-user/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── portfolio/page.tsx # Portfolio page
│   │   ├── services/page.tsx  # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Preloader.tsx      # Loading animation
│   │   ├── HeroSection.tsx    # Hero section
│   │   ├── AboutSection.tsx   # About section
│   │   ├── ServicesSection.tsx # Services section
│   │   └── PortfolioSection.tsx # Portfolio section
│   ├── lib/                   # Utility libraries
│   ├── types/                 # TypeScript type definitions
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Utility functions
├── public/                    # Static assets
│   └── img/                   # Images from original website
└── package.json               # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations
- **Lucide React**: Icon library
- **Swiper**: Touch slider library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd viz-user
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Home Page (`/`)
- Hero section with animated content
- About section with company information
- Services showcase
- Portfolio highlights
- Contact information

### About Page (`/about`)
- Company story and mission
- Team member profiles
- Company values
- Statistics and achievements

### Services Page (`/services`)
- Detailed service descriptions
- Feature lists for each service
- Process workflow
- Call-to-action sections

### Portfolio Page (`/portfolio`)
- Filterable project gallery
- Project categories
- Detailed project information
- Interactive hover effects

### Contact Page (`/contact`)
- Contact form with validation
- Company contact information
- Map integration placeholder
- Social media links

## 🎨 Components

### Header Component
- Responsive navigation menu
- Mobile hamburger menu
- Smooth scroll navigation
- Logo and branding

### Footer Component
- Company information
- Service links
- Newsletter subscription
- Social media links

### Preloader Component
- Animated loading screen
- Brand messaging
- Smooth page transitions

### Hero Section
- Animated text and images
- Call-to-action buttons
- Scroll indicators
- Background animations

## 🎯 Key Features

### Animations
- **Framer Motion**: Smooth page transitions and component animations
- **GSAP**: Advanced scroll-triggered animations
- **CSS Transitions**: Hover effects and micro-interactions

### Responsive Design
- **Mobile-first approach**: Optimized for all screen sizes
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Mobile navigation and interactions

### Performance
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic route-based splitting
- **SEO optimized**: Meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔧 Customization

### Colors
Update the color scheme in `src/app/globals.css`:
```css
.mil-accent {
  color: #f5a623; /* Change accent color */
}
```

### Typography
Modify font settings in `src/app/globals.css`:
```css
html, body {
  font-family: "Outfit", sans-serif; /* Change font family */
}
```

### Components
All components are located in `src/components/` and can be easily modified to match your brand.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original design inspiration from the HTML template
- Icons from Lucide React
- Animations powered by Framer Motion
- Styling with Tailwind CSS

## 📞 Support

For support and questions:
- Email: hello@ashley.com
- Website: [ashley.com](https://ashley.com)
- Documentation: [docs.ashley.com](https://docs.ashley.com)

---

**Built with ❤️ by the Ashley Team**
