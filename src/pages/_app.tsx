import "@site/assets/style.css";
import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import ProgressBar from "nextjs-progressbar";

import type { NextAppProps } from "@site/utilities/deps";

import { DefaultSeo } from "@site/utilities/deps";
import { env } from "@site/utilities/env";

export default function App({ Component, pageProps }: NextAppProps) {
  return (
    <ShopifyProvider
      languageIsoCode="EN"
      countryIsoCode="US"
      storeDomain={env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "hydrogen-preview.myshopify.com"}
      storefrontToken={env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN || "3b580e70970c4528da70c98e097c2fa0"}
      storefrontApiVersion={env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION || "2025-04"}
    >
      <DefaultSeo
        defaultTitle="Next Shopify Storefront"
        titleTemplate="%s • Next Shopify Storefront"
        description="🛍 A Shopping Cart built with TypeScript, Tailwind CSS, Headless UI, Next.js, React.js, Shopify Hydrogen React,... and Shopify Storefront GraphQL API."
      />
      <CartProvider>
        <ProgressBar color="orange" />
        <Component {...pageProps} />
      </CartProvider>
    </ShopifyProvider>
  );
}
