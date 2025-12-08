import { ShopLayout } from "@site/layouts/shop-layout";
import { CartSection } from "@site/sections/cart-section";
import { NextSeo } from "@site/utilities/deps";

export default function Page() {
  return (
    <ShopLayout>
      <NextSeo title="Cart" />
      <CartSection />
    </ShopLayout>
  );
}
