# Hero Section Component

## Overview
A premium hero section component with video background, designed for a custom neon sign manufacturer. Features include:

- **Video Background**: Full-screen video with fallback gradient
- **Trust Badges**: ISO certification, Top Manufacturer, and Experience badges
- **Animated Gradient Text**: Eye-catching headline with gradient animation
- **Dual CTA Buttons**: "Request a Quote" and "Start Business With Us"
- **Trust Indicators**: Statistics showing credibility (50K+ signs, 100+ countries, 98% satisfaction)
- **Glassmorphism Effects**: Modern frosted glass design elements
- **Responsive Design**: Mobile-first approach with smooth animations

## Setup Instructions

### 1. Add Video Files
Place your video background files in the `public/videos/` directory:

```
public/
  └── videos/
      ├── neon-hero-bg.mp4
      └── neon-hero-bg.webm (optional, for better browser support)
```

**Recommended Video Specifications:**
- Resolution: 1920x1080 (Full HD) or higher
- Duration: 10-30 seconds (will loop)
- Format: MP4 (H.264) and WebM for best compatibility
- File size: Optimize to under 5MB for faster loading
- Content: Neon signs in production, workshop scenes, or abstract neon lights

### 2. Video Sources
You can use:
- Your own custom video footage
- Stock video from sites like:
  - Pexels (free): https://www.pexels.com/search/videos/neon/
  - Pixabay (free): https://pixabay.com/videos/search/neon%20lights/
  - Envato Elements (paid): https://elements.envato.com/

### 3. Usage in Your App
The component is already created at `src/components/hero-section.tsx`. Import and use it in your page:

```tsx
import { HeroSection } from '@site/components/hero-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
    </>
  );
}
```

### 4. Customization

#### Update Links
Modify the CTA button links in the component:
- Line ~97: Change `/contact` to your inquiry/contact page
- Line ~111: Change `/products` to your products/catalog page

#### Update Statistics
Modify the trust indicators (lines ~125-137) to match your actual business metrics:
- Signs Produced
- Countries Served
- Customer Satisfaction

#### Update Badges
Customize the badges (lines ~34-59) to reflect your certifications and achievements.

#### Update Text Content
- **Main Headline** (lines ~62-68): Customize your unique value proposition
- **Subtitle** (line ~72): Update production capabilities
- **Description** (lines ~76-80): Tell your company story

## Features Breakdown

### Video Background
- Auto-plays on load with muted audio
- Loops continuously
- Includes gradient overlay for text readability
- Fallback gradient background while video loads

### Badges
Three glassmorphism-style badges showing:
1. ISO 9001 Certification (with star icon)
2. Top Manufacturer status (with checkmark icon)
3. Years of experience (with eye icon)

### Animations
- Gradient text animation on headline
- Hover effects on buttons
- Pulse animation on gradient overlay
- Bounce animation on scroll indicator
- Smooth transitions throughout

### Responsive Design
- Mobile-first approach
- Adjusts text sizes for different screen sizes
- Stacks buttons vertically on mobile
- Hides separators on small screens

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers (shows gradient background if video not supported)

## Performance Tips
1. **Optimize video file size**: Use tools like HandBrake or FFmpeg to compress
2. **Use poster image**: Add a `poster` attribute to the video element
3. **Lazy load**: Consider lazy loading the video for below-the-fold placements
4. **CDN**: Host video files on a CDN for faster delivery

## Troubleshooting

### Video not playing
- Check that video files exist in `public/videos/`
- Verify video format is supported (MP4 H.264 is most compatible)
- Check browser console for errors
- Ensure video is not too large (compress if needed)

### Styling issues
- Verify Tailwind CSS is properly configured
- Check that custom animations in `style.css` are loaded
- Clear browser cache and rebuild

### Performance issues
- Reduce video file size
- Use lower resolution video for mobile devices
- Consider using a static image on mobile instead of video

## Next Steps
1. Add your video files to `public/videos/`
2. Customize the text content and links
3. Update statistics and badges to match your business
4. Test on different devices and browsers
5. Optimize video file size for production
