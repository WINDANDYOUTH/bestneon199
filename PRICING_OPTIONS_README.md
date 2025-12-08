# Pricing & Options Section Documentation

Successfully added the "Pricing & Options" section as the sixth section of the homepage. This section provides a transparent overview of materials, technology, and pricing options, along with a Wholesale/Bulk order highlight.

## Features

- **Options Grid**: 5 clear customization categories:
  - Material & Tech (Bolt icon)
  - Backboard Options (Cube icon)
  - Color Palette (PaintBrush icon)
  - Dimmer & Remote (Adjustments icon)
  - Mounting Kits (Sun icon)
- **Wholesale Feature**: A prominent card highlighting B2B benefits like volume discounts and priority production.
- **Clear CTA**: "Get Exact Quote" button leading to the contact page.
- **Design**: Clean grid layout with hero icons and color accents, plus a dark-themed card for the wholesale feature to stand out.

## Content Management

The content is defined in `src/components/pricing-and-options.tsx`.

### Updating Options
Modify the `options` array. Each object contains:
- `title`
- `description`
- `icon` (Heroicon component)
- `color` (Tailwind color name for styling)

### Updating Wholesale Info
Edit the static content within the wholesale card div (around line 77).

## Integration

The section is added to `src/pages/index.tsx` as `<PricingAndOptions />`, placed at the bottom of the section list.

## Verification

Visit `http://localhost:3000` and scroll to the bottom. You should see the "Pricing & Customization" section.
