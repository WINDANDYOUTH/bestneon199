# FAQ Section Documentation

Successfully added the "Frequently Asked Questions" section. This section uses an interactive accordion layout to answer common customer queries without cluttering the page.

## Features

- **Expandable Questions**: Clean UI where answers are hidden by default. Clicking a question reveals the answer.
- **Content Covered**: Production time, Design mockups, Logo capabilities, Lifespan, Payment methods, and Wholesale/OEM support.
- **Design**: Clean white background with subtle hover effects and smooth transitions (using Headless UI `Disclosure`).

## Content Management

The content is defined in `src/components/faq-section.tsx`.

### Updating FAQs
Modify the `faqs` array (lines 6-30). Each object has:
- `question`: The visible header text.
- `answer`: The hidden content text.

To add more questions, simply add more objects to this array. The layout will adapt automatically.

## Integration

The section is added to `src/pages/index.tsx` as `<FAQSection />`, placed after the Shipping & Warranty section.

## Verification

Visit `http://localhost:3000` and scroll to the bottom. Click on the questions to verify they expand and collapse smoothly.
