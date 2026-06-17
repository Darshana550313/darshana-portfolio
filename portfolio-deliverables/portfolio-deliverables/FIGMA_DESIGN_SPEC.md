# Figma Design Specification
## Darshana Ajit Deshmukh - Portfolio Website

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#ff6fa3` | Primary buttons, links, accents |
| `--color-primary-dark` | `#e85a8e` | Hover states, gradients |
| `--color-primary-light` | `#ffd6e7` | Backgrounds, badges, borders |
| `--color-primary-50` | `#fff0f5` | Light backgrounds |
| `--color-background` | `#ffffff` | Page background |
| `--color-text-primary` | `#333333` | Headings, body text |
| `--color-text-secondary` | `#666666` | Secondary text |
| `--color-text-muted` | `#999999` | Captions, hints |
| `--color-border` | `#ffe0ed` | Card borders, dividers |

### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Inter | 48-72px | 700 | 1.1 |
| H2 (Section) | Inter | 32-48px | 700 | 1.2 |
| H3 (Card Title) | Inter | 20-24px | 600 | 1.3 |
| H4 (Subtitle) | Inter | 16-18px | 600 | 1.4 |
| Body | Inter | 14-16px | 400 | 1.6 |
| Caption | Inter | 12-14px | 400 | 1.5 |
| Button | Inter | 14-16px | 500 | 1 |

### Spacing System (8px Base)

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |

### Border Radius

| Token | Value |
|-------|-------|
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-lg` | 12px |
| `radius-xl` | 16px |
| `radius-2xl` | 20px |
| `radius-full` | 9999px |

### Shadows

| Token | Value |
|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` |
| `shadow-pink` | `0 4px 20px rgba(255,111,163,0.25)` |
| `shadow-pink-lg` | `0 8px 40px rgba(255,111,163,0.35)` |

---

## 📱 Artboards

### 1. Desktop (1440px)
- **Navigation**: Fixed header with logo, nav links, CTA button
- **Hero**: Two-column layout (content + profile image)
- **About**: Two-column (image + bio with strengths grid)
- **Skills**: 2x2 grid of skill category cards
- **Projects**: 3-column project cards grid
- **Experience**: Timeline layout with company card
- **Education**: 2-column education cards
- **Contact**: Two-column (info + form)
- **Footer**: 4-column layout with links

### 2. Tablet (768px)
- Single column layouts with adjusted spacing
- Navigation collapses to hamburger menu
- Skills grid becomes 2 columns
- Projects grid becomes 2 columns
- Contact stacks vertically

### 3. Mobile (375px)
- Single column throughout
- Full-width cards
- Stacked navigation menu
- Simplified hero layout
- Touch-friendly buttons (min 44px)

---

## 🧩 Component Library

### Buttons

**Primary Button**
- Background: Gradient `#ff6fa3` → `#e85a8e`
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Hover: Scale 1.02, shadow-pink-lg

**Secondary Button**
- Background: White
- Border: 1px solid `#ff6fa3`
- Text: `#ff6fa3`
- Hover: Background `#fff0f5`

**Ghost Button**
- Background: Transparent
- Text: `#ff6fa3`
- Hover: Background `#fff0f5`

### Cards

**Project Card**
- Background: White
- Border: 1px solid `#ffd6e7`
- Border Radius: 16px
- Shadow: `shadow-sm`
- Hover: `shadow-pink`, translateY(-8px)

**Skill Card**
- Background: White
- Border: 1px solid `#ffd6e7`
- Border Radius: 16px
- Padding: 24px

### Form Elements

**Input Field**
- Border: 1px solid `#ffd6e7`
- Border Radius: 8px
- Padding: 12px 16px
- Focus: Border `#ff6fa3`, ring

**Textarea**
- Same as input
- Min height: 120px

### Badges

**Tech Badge**
- Background: `#fff0f5`
- Text: `#ff6fa3`
- Padding: 4px 12px
- Border Radius: 9999px

**Status Badge**
- Background: `#fff0f5`
- Text: `#ff6fa3`
- Padding: 4px 12px
- Border Radius: 9999px

---

## 🎭 Interactions & Animations

### Scroll Behavior
- Smooth scroll enabled globally
- Navigation highlights active section

### Hover Effects
- Cards: translateY(-8px), shadow-pink
- Buttons: Scale 1.02, enhanced shadow
- Links: Color transition to pink
- Images: Scale 1.05 with overflow hidden

### Scroll Animations
- Elements fade in and translate up on scroll
- Stagger delay: 0.1s between elements
- Duration: 0.5s ease-out

### Loading States
- Buttons show spinner during submission
- Form shows success state after submission

---

## 📐 Layout Specifications

### Container
- Max width: 1280px
- Padding: 16px (mobile), 24px (tablet), 32px (desktop)

### Grid System
- 12-column grid on desktop
- 6-column grid on tablet
- 4-column grid on mobile
- Gap: 24px (desktop), 16px (mobile)

### Section Spacing
- Vertical padding: 80px (desktop), 60px (tablet), 40px (mobile)

---

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1)
- Interactive elements have visible focus states

### Focus States
- Outline: 2px solid `#ff6fa3`
- Outline offset: 2px

### Reduced Motion
- Respect `prefers-reduced-motion`
- Disable animations for users who prefer reduced motion

---

## 📤 Export Settings

### Images
- Format: WebP (with JPEG fallback)
- Quality: 85%
- Responsive images: 1x, 2x

### Icons
- Format: SVG
- Size: 24x24px (default)

### Assets
- Profile images: 400x400px, 800x800px (@2x)
- Project images: 800x450px, 1600x900px (@2x)

---

## 🔗 Figma File Structure

```
📁 Portfolio Design
├── 📄 Cover
├── 📁 Design System
│   ├── 🎨 Colors
│   ├── 🔤 Typography
│   ├── 📐 Spacing
│   └── 🧩 Components
├── 📁 Desktop
│   ├── 01 Navigation
│   ├── 02 Hero
│   ├── 03 About
│   ├── 04 Skills
│   ├── 05 Projects
│   ├── 06 Experience
│   ├── 07 Education
│   ├── 08 Contact
│   └── 09 Footer
├── 📁 Tablet
│   └── (Responsive versions)
└── 📁 Mobile
    └── (Responsive versions)
```

---

## 📝 Notes for Developers

1. Use CSS custom properties for all design tokens
2. Implement mobile-first responsive design
3. Use semantic HTML elements
4. Ensure all interactive elements are keyboard accessible
5. Test with screen readers
6. Optimize images for web performance
7. Implement lazy loading for below-fold images

---

*Design created for Darshana Ajit Deshmukh Portfolio*
*Last updated: March 2025*
