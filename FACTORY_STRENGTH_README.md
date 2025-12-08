# Factory Strength Section Documentation

Successfully added the "Factory Strength / About Us" section to the homepage. This section builds B2B trust by showcasing your manufacturing capabilities, scale, and certifications.

## Features

- **Stats Grid**: Highlights key metrics:
  - 10+ Years Experience
  - 5000m² Factory Size
  - 50+ Export Countries
  - 100k+ Annual Capacity
- **Certifications**: Displays important compliance badges: CE, RoHS, UL, ISO 9001.
- **Visuals**: A clean layout mixing text with a dynamic image grid (placeholder for factory photos).

## Content Management

The content is defined in `src/components/factory-strength.tsx`.

### Updating Stats
Modify the `stats` array (lines 13-18).

### Updating Text
Edit the heading and paragraph text directly in the JSX (lines 35-42).

### Updating Images
There are three image placeholders in the grid. To replace them with real images:
1.  Uncomment the `<img>` tags (lines 80, 89, 98).
2.  Update the `src` paths to point to your real images in `public/images/factory/`.
3.  Remove the SVG placeholder blocks.

## Integration

The section is added to `src/pages/index.tsx` as `<FactoryStrength />`, placed after the Pricing & Options section.

## Verification

Visit `http://localhost:3000` and scroll to the bottom. You should see the "World-Class Manufacturing Capability" section.
