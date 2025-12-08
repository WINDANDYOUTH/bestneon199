import { ContactBlock } from "@site/sections/contact-block";
import { CustomProcess } from "@site/sections/custom-process";
import { CustomerReviews } from "@site/sections/customer-reviews";
import { FactoryStrength } from "@site/sections/factory-strength";
import { FAQSection } from "@site/sections/faq-section";
import { HeroSection } from "@site/sections/hero-section";
import { PricingAndOptions } from "@site/sections/pricing-and-options";
import { ProductCategories } from "@site/sections/product-categories";
import { RealWork } from "@site/sections/real-work";
import { ShippingWarranty } from "@site/sections/shipping-warranty";
import { WhyChooseUs } from "@site/sections/why-choose-us";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ProductCategories />
      <RealWork />
      <CustomProcess />
      <PricingAndOptions />
      <FactoryStrength />
      <CustomerReviews />
      <ShippingWarranty />
      <FAQSection />
      <ContactBlock />
    </>
  );
}
