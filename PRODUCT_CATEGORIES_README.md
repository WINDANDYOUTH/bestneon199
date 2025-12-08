# Product Categories Section

## Overview
A stunning Product Categories section showcasing the 5 main types of neon signs your company manufactures. This section features interactive cards with hover effects, gradient backgrounds, and clear call-to-action buttons.

## Features

### 5 Product Categories

1. **Custom Text Neon Signs**
   - Icon: Edit/Pencil
   - Gradient: Pink to Rose
   - Badge: "1000+ Designs"
   - Description: Transform words into glowing art

2. **Logo Neon Signs**
   - Icon: Design/Paint Brush
   - Gradient: Blue to Cyan
   - Badge: "Brand Perfect"
   - Description: Illuminate brand identity with precision

3. **Business & Shop Signs**
   - Icon: Building/Store
   - Gradient: Purple to Indigo
   - Badge: "Commercial Grade"
   - Description: Eye-catching storefront signage

4. **Wedding & Event Neon**
   - Icon: Heart
   - Gradient: Pink to Purple
   - Badge: "Event Ready"
   - Description: Create magical moments for special occasions

5. **Open Signs & Standard Models**
   - Icon: Badge/Checkmark
   - Gradient: Green to Emerald
   - Badge: "Quick Ship"
   - Description: Ready-to-ship classic designs

## Design Features

### Card Interactions
Each category card includes:
- **Hover Effects**:
  - Card lifts up (-translate-y-2)
  - Shadow intensifies (shadow-lg → shadow-2xl)
  - Icon scales and rotates
  - "Learn More" arrow slides right
  - Decorative corner accent expands

### Visual Elements
- **Gradient Backgrounds**: Each category has a unique color gradient
- **Icon Placeholders**: Large circular icons until images are added
- **Stats Badges**: Quick highlights (e.g., "1000+ Designs", "Quick Ship")
- **Smooth Animations**: 500ms transitions for professional feel

### Bottom Section
- **Custom Design CTA**: Large call-to-action for custom orders
- **Dual Buttons**: 
  - "Request Custom Design" (gradient button)
  - "Browse Catalog" (outlined button)
- **Features Strip**: 4 quick features with emoji icons

## Component Structure

```tsx
<ProductCategories />
```

### Categories Array
Each category object contains:
```tsx
{
  title: string,           // Category name
  description: string,     // Brief description
  image: string,          // Image path (placeholder for now)
  icon: JSX.Element,      // SVG icon
  gradient: string,       // Tailwind gradient classes
  stats: string,          // Badge text
}
```

## Customization Guide

### Update Category Content
Edit the `categories` array in `src/components/product-categories.tsx` (lines 9-76):

```tsx
{
  title: 'Your Category Name',
  description: 'Your description here...',
  image: '/images/categories/your-image.jpg',
  icon: <svg>...</svg>,
  gradient: 'from-color-500 to-color-500',
  stats: 'Your Badge Text',
}
```

### Change Gradients
Available gradient combinations:
- `from-pink-500 to-rose-500`
- `from-blue-500 to-cyan-500`
- `from-purple-500 to-indigo-500`
- `from-pink-500 to-purple-500`
- `from-green-500 to-emerald-500`
- `from-yellow-500 to-orange-500`
- `from-red-500 to-pink-500`

### Update CTAs
Modify the CTA links (lines 189-204):
```tsx
href="/contact"    // Change to your contact page
href="/products"   // Change to your products page
```

### Add/Remove Categories
Simply add or remove objects from the `categories` array. The grid automatically adjusts:
- 1-2 categories: Single column on mobile, 2 on desktop
- 3-5 categories: Single column on mobile, 2 on tablet, 3 on desktop
- 6+ categories: Consider creating a second row

### Update Feature Icons
Modify the features strip (lines 209-220):
```tsx
{ icon: '⚡', text: 'Fast Production' },
{ icon: '🎨', text: 'Any Color' },
// Add more features...
```

## Adding Real Images

### Image Requirements
- **Format**: JPG or WebP
- **Size**: 800x600px or 1200x900px recommended
- **Aspect Ratio**: 4:3 (landscape)
- **File Size**: Under 200KB (optimized)

### Image Locations
Place images in `public/images/categories/`:
- `custom-text.jpg`
- `logo-signs.jpg`
- `business-signs.jpg`
- `wedding-event.jpg`
- `open-signs.jpg`

### Where to Find Images
1. **Your Own Products**: Best option for authenticity
2. **Unsplash**: https://unsplash.com/s/photos/neon-sign
3. **Pexels**: https://www.pexels.com/search/neon%20sign/
4. **Pixabay**: https://pixabay.com/images/search/neon%20sign/

### Image Optimization
Use these tools before uploading:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Full-width cards
- Stacked CTA buttons
- Reduced padding

### Tablet (768px - 1024px)
- 2 column grid
- Medium card sizes
- Side-by-side CTA buttons

### Desktop (> 1024px)
- 3 column grid
- Full hover effects
- Optimal spacing

## Animation Details

### Card Hover Animation
```css
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1)
transform: translateY(-8px)
shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Icon Animation
```css
scale: 110%
rotate: 6deg
transition: 500ms
```

### Arrow Slide
```css
translateX(8px) on hover
transition: 300ms
```

## Integration

The section is already integrated into your homepage:

```tsx
// src/pages/index.tsx
import { ProductCategories } from "@site/sections/product-categories";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProductCategories />  {/* ← Third section */}
    </>
  );
}
```

## Performance Notes

- **Lightweight**: Pure CSS animations, no JavaScript animations
- **GPU Accelerated**: Uses transform and opacity
- **Optimized SVGs**: Inline SVG icons
- **Lazy Loading**: Images will lazy-load when added
- **No External Dependencies**: Pure React + Tailwind

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ⚠️ IE11: Basic layout works, animations degraded

## SEO Considerations

- **Semantic HTML**: Proper heading hierarchy
- **Descriptive Text**: Clear category descriptions
- **Alt Text**: Add alt attributes when images are added
- **Structured Data**: Consider adding Product schema

## Tips for Best Results

1. **Use Real Product Photos**: Authenticity builds trust
2. **Keep Descriptions Concise**: 2-3 sentences max
3. **Highlight Unique Features**: What makes each category special?
4. **Update Stats Regularly**: Keep badges current
5. **A/B Test CTAs**: Try different button text
6. **Monitor Hover Rates**: Track user engagement

## Next Steps

1. ✅ Section is live on homepage
2. Add real product images to `public/images/categories/`
3. Customize descriptions to match your exact offerings
4. Update CTA links to your actual pages
5. Consider adding customer examples for each category
6. Test on different devices and browsers

## Common Customizations

### Change Number of Columns
```tsx
// In the grid div (line 124)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
// Change lg:grid-cols-3 to lg:grid-cols-4 for 4 columns
```

### Adjust Card Height
```tsx
// In the image container (line 136)
className="relative h-64 overflow-hidden"
// Change h-64 to h-72 or h-80 for taller cards
```

### Modify Hover Lift Distance
```tsx
// In the card div (line 130)
className="... hover:-translate-y-2"
// Change to hover:-translate-y-4 for more lift
```

## Troubleshooting

### Cards Not Hovering
- Check that `group` class is on parent div
- Verify `group-hover:` prefixes are correct
- Ensure Tailwind is processing the file

### Images Not Showing
- Verify images are in `public/images/categories/`
- Check file names match exactly (case-sensitive)
- Ensure Next.js dev server is running
- Clear browser cache

### Layout Issues
- Check responsive breakpoints (md:, lg:)
- Verify grid classes are correct
- Test on different screen sizes

## Future Enhancements

Consider adding:
- [ ] Image lightbox/modal on click
- [ ] Filter/search functionality
- [ ] Category-specific landing pages
- [ ] Customer testimonials per category
- [ ] Video backgrounds instead of images
- [ ] 3D hover effects
- [ ] Parallax scrolling

---

The Product Categories section is now live and looking great! 🎨✨
