# Real Work / Portfolio Section Documentation

Successfully added the "Real Work" section to the homepage. This section builds trust by showcasing real customer projects and demonstrating the accuracy of your manufacturing through "Design vs. Reality" comparisons.

## Features

- **Interactive Comparison**: Cards show the Final Product by default. Hovering over a card reveals the original Design Proof, highlighting precision.
- **Gallery Modal**: A "View Full Gallery" button opens a full-screen modal showing more projects.
- **High-Trust Design**: Uses a dark theme to make the neon colors pop, with badging for "Final Product" and "Design Proof".

## Managing Content

### Adding/Editing Projects

The projects are defined in `src/components/real-work.tsx` in two arrays:

1. `featuredProjects` (lines 19-48): The 3 main projects shown on the homepage.
2. `galleryProjects` (lines 51-78): Includes the featured projects + additional ones for the modal.

To add a new project, simply add an object to the array:

```tsx
{
  id: 7,
  title: "New Project Name",
  category: "Category Name",
  designImage: "/images/portfolio/new-design.jpg",
  finalImage: "/images/portfolio/new-real.jpg",
  description: "Description of the project."
}
```

### Adding Images

1. Place your images in `public/images/portfolio/`.
2. Follow the naming convention: `projectname-design.jpg` and `projectname-real.jpg`.
3. Update the paths in the component code.

See `public/images/portfolio/README.md` for more details on image specifications.

## Customization

- **Change Default View**: If you want to show the Design first and reveal the Real product on hover, swap the `group-hover:opacity-0` logic in the component (lines 107-112).
- **Adjust Grid**: The layout uses standard Tailwind grid classes (`grid-cols-1 md:grid-cols-3`). You can change this to show 2 or 4 items if preferred.

## Verification

Visit `http://localhost:3000` and scroll to the bottom to see the new section.
- **Hover**: Test the hover effect on the cards.
- **Click**: Click "View Details" or "View Full Gallery" to open the modal.
