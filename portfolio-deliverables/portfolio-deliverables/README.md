# Darshana Ajit Deshmukh - Portfolio Deliverables

This package contains all deliverables for Darshana's professional portfolio website.

---

## 📦 Package Contents

```
portfolio-deliverables/
├── README.md                    # This file
├── FIGMA_DESIGN_SPEC.md         # Figma design specification
├── PROJECT_README.md            # React project README
├── react-project.tar.gz         # React project source code
└── react-project/               # Extracted React project (if applicable)
```

---

## 🚀 Quick Start

### 1. Extract the React Project

```bash
tar -xzf react-project.tar.gz
```

### 2. Install Dependencies

```bash
cd app
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 🌐 Live Website

The portfolio website is deployed and live at:
**https://nhe4ay7ybzrjg.ok.kimi.link**

---

## 🎨 Design Assets

### Figma Design Specification
See `FIGMA_DESIGN_SPEC.md` for:
- Complete design system (colors, typography, spacing)
- Component library specifications
- Responsive breakpoints
- Interaction and animation guidelines
- Export settings

### Design Preview
![Design Preview](./app/public/images/figma-design-preview.jpg)

---

## 📁 Project Structure

```
app/
├── public/
│   ├── images/
│   │   ├── profile-light.jpg      # Professional headshot
│   │   ├── profile-dark.jpg       # Alternative photo
│   │   ├── project-enews.jpg      # E-News AI preview
│   │   ├── project-examelt.jpg    # EXAMELT preview
│   │   ├── project-cng.jpg        # CNG Fuel Management preview
│   │   └── figma-design-preview.jpg
│   └── resume.pdf                 # Downloadable resume
├── src/
│   ├── sections/                  # All page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── components/ui/             # shadcn/ui components
│   ├── App.tsx                    # Main app
│   ├── App.css
│   ├── index.css                  # Global styles
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Pink | `#ff6fa3` | Buttons, links, accents |
| Light Pink | `#ffd6e7` | Backgrounds, borders |
| White | `#ffffff` | Page background |
| Dark Gray | `#333333` | Text |

---

## 📱 Sections Included

1. **Hero** - Introduction with name, title, and CTAs
2. **About** - Bio, education, strengths
3. **Skills** - Categorized skills with progress bars
4. **Projects** - 3 featured projects with modals
5. **Experience** - Work history
6. **Education** - Academic background
7. **Contact** - Contact form and information
8. **Footer** - Links and social media

---

## 🛠️ Technologies Used

- **React** 18+ - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

---

## 📤 Deployment Options

### GitHub Pages
1. Update `vite.config.ts` with `base: '/repo-name/'`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy script to `package.json`
4. Run `npm run deploy`

### Netlify
1. Build: `npm run build`
2. Drag `dist/` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel`

See `PROJECT_README.md` for detailed deployment instructions.

---

## 📝 Customization

### Update Content
Edit files in `src/sections/` to update:
- Personal information
- Project details
- Skills
- Experience
- Education

### Update Images
Replace files in `public/images/`:
- Profile photos
- Project previews

### Update Resume
Replace `public/resume.pdf` with your actual resume.

---

## ♿ Accessibility

- WCAG AA compliant color contrast
- Semantic HTML
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

---

## 📞 Contact

- **Email**: darshana.d0313@gmail.com
- **Phone**: +91 7559239926
- **LinkedIn**: linkedin.com/in/darshana-deshmukh

---

## 📄 License

MIT License - Feel free to use and modify.

---

Made with ❤️ for Darshana Ajit Deshmukh
