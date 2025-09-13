# Front-End Assignment - SaaS Landing Page

A modern, responsive SaaS landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features smooth animations powered by Framer Motion and a clean, professional design optimized for conversion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Performance Optimized**: Uses Next.js Image optimization and static generation
- **Accessibility**: Semantic HTML and ARIA labels for screen reader compatibility
- **Dynamic Content**: Fetches testimonials from JSONPlaceholder API
- **Component Architecture**: Modular, reusable components for maintainability

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with Turbopack
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.12
- **Linting**: ESLint 9 with Next.js config
- **Fonts**: Inter and DM Sans from Google Fonts

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main landing page
├── components/            # Reusable UI components
│   ├── HeroSection.tsx    # Hero section with animations
│   ├── ProductivitySection.tsx # Features section
│   ├── navbar.tsx         # Navigation component
│   ├── testimonialcard.tsx # Testimonial components
│   ├── plancard.tsx       # Pricing plans
│   ├── featurecard.tsx    # Feature cards
│   └── ...               # Other UI components
├── lib/                   # Utility functions and data
│   └── testimonials.ts    # Testimonial types and utilities
└── styles/               # Global styles
    └── global.css        # Tailwind imports and custom styles

public/
├── images/               # Static assets organized by sections
│   ├── Hero Section/     # Hero section images
│   ├── Logo/            # Brand logos
│   ├── Management Section/ # Management feature images
│   ├── Productivity Section/ # Productivity feature images
│   └── Sign Up Section/ # Call-to-action images
└── ...                  # Favicon and other assets
```

## 🎨 Key Sections

### Hero Section

- Animated eyebrow badge announcing "Version 2.0"
- Compelling headline with call-to-action buttons
- 3D visual elements with scroll-triggered animations
- Responsive grid layout

### Productivity Section

- Logo strip showcasing partner integrations
- Feature highlights with icons and descriptions
- Parallax scroll effects on decorative elements
- Progress tracking theme

### Management Section

- Feature cards grid highlighting key capabilities
- Integration ecosystem showcase
- Goal setting and tracking features
- Security and notification customization

### Pricing Section

- Three-tier pricing structure
- Feature comparison across plans
- Clear call-to-action buttons
- Professional plan highlighting

### Testimonials

- Dynamic testimonial loading from external API
- Responsive card layout
- User avatar and rating system
- Smooth carousel navigation

### Footer

- Comprehensive navigation links
- Social media integration
- Company information and legal links
- Multi-column responsive layout

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PapulaAhmed/Front-End-Assignment.git
   cd front-end-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- **`npm run dev`** - Start development server with Turbopack
- **`npm run build`** - Build production application with Turbopack
- **`npm start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality

## 🎯 Component Overview

### Core Components

- **`HeroSection`** - Main landing section with animations
- **`ProductivitySection`** - Features showcase with scroll effects
- **`TestimonialSection`** - Dynamic testimonials display
- **`Navbar`** - Navigation with responsive design
- **`Footer`** - Comprehensive site footer

### UI Components

- **`Eyebrow`** - Pill-shaped badges for section labels
- **`GetFreeBtn`** - Primary call-to-action button
- **`LearnMoreBtn`** - Secondary action button
- **`FeatureCards`** - Grid layout for feature highlights
- **`PlanCards`** - Pricing plan comparison cards

### Utility Components

- **`Logo`** - Brand logo component
- **`LogoStrip`** - Partner logos carousel
- **`SocialMediaIcons`** - Social media link buttons
- **`IconWrapper`** - Icon components with consistent styling

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with PostCSS configuration for utility-first styling.

### Fonts

- **DM Sans**: Primary font for headings and UI elements
- **Inter**: Secondary font for body text and paragraphs

### ESLint

Configured with Next.js recommended settings for code quality and consistency.

## 🌐 API Integration

The application fetches testimonials from the JSONPlaceholder API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Usage**: Transforms blog posts into testimonial format
- **Caching**: Static generation with ISR-friendly caching

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance


### Build for Production

```bash
npm run build
npm start
```

## 👨‍💻 Author

**Papula Ahmed**

- GitHub: [@PapulaAhmed](https://github.com/PapulaAhmed)

---

Built with using Next.js, React, and modern web technologies.
