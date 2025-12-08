import type { ReactNode } from "@site/utilities/deps";

import { HeaderSection } from "@site/sections/header-section";

interface Props {
  children: ReactNode;
}

/**
 * ShopLayout - Used for Shopify-related pages (products, cart, etc.)
 * Includes header navigation and shopping cart functionality
 */
export function ShopLayout(props: Props) {
  return (
    <>
      <HeaderSection />
      <main className="mx-auto max-w-7xl p-6 lg:px-8">{props.children}</main>
    </>
  );
}
