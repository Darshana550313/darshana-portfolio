# Darshana Ajit Deshmukh - Portfolio Website

A modern, responsive portfolio website for Darshana Ajit Deshmukh - Software Developer, Python Developer, and Data Science Student.

![Portfolio Preview](./public/images/profile-light.jpg)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with soft pink & white color scheme
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **Accessible**: WCAG compliant with proper focus states and semantic HTML
- **Fast Performance**: Optimized build with Vite for lightning-fast loading

## 🎨 Design System

### Colors
- **Primary**: `#ff6fa3` (Pink)
- **Secondary**: `#ffd6e7` (Light Pink)
- **Background**: `#ffffff` (White)
- **Text**: `#333333` (Dark Gray)

### Typography
- **Font Family**: Inter, Poppins, system-ui
- **Hierarchy**: Clear heading structure with responsive sizing

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── profile-light.jpg      # Professional headshot
│   │   ├── profile-dark.jpg       # Alternative profile photo
│   │   ├── project-enews.jpg      # E-News AI project preview
│   │   ├── project-examelt.jpg    # EXAMELT project preview
│   │   └── project-cng.jpg        # CNG Fuel Management project preview
│   └── resume.pdf                 # Downloadable resume (add your own)
├── src/
│   ├── sections/
│   │   ├── Navigation.tsx         # Fixed navigation bar
│   │   ├── Hero.tsx               # Hero section with intro
│   │   ├── About.tsx              # About me section
│   │   ├── Skills.tsx             # Skills showcase
│   │   ├── Projects.tsx           # Projects grid with modals
│   │   ├── Experience.tsx         # Work experience
│   │   ├── Education.tsx          # Education background
│   │   ├── Contact.tsx            # Contact form
│   │   └── Footer.tsx             # Footer with links
│   ├── components/ui/             # shadcn/ui components
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App-specific styles
│   ├── index.css                  # Global styles & Tailwind
│   └── main.tsx                   # Entry point
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
└── package.json                   # Dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshana-deshmukh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The built files will be in the `dist/` directory.

## 📦 Deployment

### Option 1: GitHub Pages (Free)

1. **Update `vite.config.ts`**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     plugins: [react()],
     // ...
   })
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts to `package.json`**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option 2: Netlify (Recommended)

#### Method A: Drag & Drop
1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Your site is live!

#### Method B: Git Integration
1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

#### Method C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: Vercel

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

3. For production
   ```bash
   vercel --prod
   ```

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following files to customize content:

- **`src/sections/Hero.tsx`**: Name, title, intro text
- **`src/sections/About.tsx`**: Bio, education, strengths
- **`src/sections/Skills.tsx`**: Skills and proficiency levels
- **`src/sections/Projects.tsx`**: Project details and links
- **`src/sections/Experience.tsx`**: Work experience
- **`src/sections/Education.tsx`**: Education background
- **`src/sections/Contact.tsx`**: Contact information

### 2. Update Images

Replace images in `public/images/`:
- `profile-light.jpg` - Your professional photo (light background)
- `profile-dark.jpg` - Alternative photo (dark background)
- `project-*.jpg` - Project preview images (16:9 ratio recommended)

### 3. Update Resume

Add your resume PDF to `public/resume.pdf` for the download button to work.

### 4. Update Social Links

Edit social media links in:
- `src/sections/Hero.tsx`
- `src/sections/Footer.tsx`
- `src/sections/Contact.tsx`

### 5. Update Colors

To change the color scheme, edit:
- `tailwind.config.js` - Update pink color values
- `src/index.css` - Update CSS variables

## 🔧 Environment Variables

Create a `.env` file for environment-specific settings:

```env
# Contact form endpoint (optional)
VITE_CONTACT_FORM_URL=https://formspree.io/f/YOUR_FORM_ID

# Analytics (optional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 📧 Contact Form Setup

### Option 1: Netlify Forms (Recommended for Netlify deployment)
The contact form already includes Netlify form attributes. Just deploy to Netlify and forms will work automatically.

### Option 2: Formspree
1. Create account at [Formspree](https://formspree.io)
2. Create a new form
3. Update the form action in `src/sections/Contact.tsx`

### Option 3: EmailJS
1. Sign up at [EmailJS](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Configure in Contact.tsx

## 🔍 SEO Checklist

- [ ] Update meta tags in `index.html`
- [ ] Update Open Graph image URL
- [ ] Update structured data in `App.tsx`
- [ ] Add your domain to all URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build and preview
npm run build
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## 📞 Contact

- **Email**: darshana.d0313@gmail.com
- **Phone**: +91 7559239926
- **LinkedIn**: [linkedin.com/in/darshana-deshmukh](https://linkedin.com/in/darshana-deshmukh)
- **GitHub**: [github.com/darshana-deshmukh](https://github.com/darshana-deshmukh)

---

Made with ❤️ by Darshana Ajit Deshmukh
