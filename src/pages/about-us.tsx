import { ShopLayout } from "@site/layouts/shop-layout";
import { FactoryStrength } from "@site/sections/factory-strength";
import { NextSeo } from "@site/utilities/deps";

export default function AboutUsPage() {
  return (
    <ShopLayout fullWidth>
      <NextSeo 
        title="About Us" 
        description="Learn more about Best Trading (Dongguan) Co., Ltd. - A leading manufacturer of customized neon signs with world-class capability." 
      />
      <FactoryStrength />
    </ShopLayout>
  );
}
