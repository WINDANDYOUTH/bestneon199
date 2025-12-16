import { ShopLayout } from "@site/layouts/shop-layout";
import { ContactBlock } from "@site/sections/contact-block";
import { NextSeo } from "@site/utilities/deps";

export default function ContactUsPage() {
  return (
    <ShopLayout fullWidth>
      <NextSeo 
        title="Contact Us" 
        description="Get in touch with Best Trading (Dongguan) Co., Ltd. for factory direct customized neon signs." 
      />
      <ContactBlock />
    </ShopLayout>
  );
}
