# Contact Block Section Documentation

Successfully added the "Contact Block" section as the final element of the homepage. This functional footer invites users to take immediate action.

## Features

- **Direct Contact Info**: Prominently displays email and factory address.
- **Copy-to-Clipboard**: Enhanced UX allows users to copy the support email (`info@bestneon199.com`) with a single click. Visual feedback ("Copied!") confirms the action.
- **Premium Design**: Dark theme (`bg-gray-950`) to visually anchor the bottom of the page.
- **Primary CTA**: A large, gradient-bordered card encourages users to "Get Free Design & Quote".

## Content Management

The content is defined in `src/components/contact-block.tsx`.

### Updating Email
Change the `email` constant variable (line 14). This updates both the display text and the copy function logic.

### Updating Address
Edit the JSX text inside the address block (lines 48-52).

## Integration

The section is added to `src/pages/index.tsx` as `<ContactBlock />`, placed at the very end of the page.

## Verification

Visit `http://localhost:3000` and scroll to the bottom.
1. Click the "Copy" icon next to the email.
2. Confirm the "Copied!" tooltip appears.
