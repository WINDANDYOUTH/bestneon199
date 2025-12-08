import type { PageProps } from "@site/utilities/deps";

import { ShopLayout } from "@site/layouts/shop-layout";
import { fetchProductListSection, ProductListSection } from "@site/sections/product-list-section";
import { fetchServerSideProps, NextSeo } from "@site/utilities/deps";

export const getStaticProps = fetchServerSideProps(async () => {
  return {
    props: {
      data: {
        productListSection: await fetchProductListSection(),
      },
    },
    revalidate: 60,
  };
});

export default function Page(props: PageProps<typeof getStaticProps>) {
  return (
    <ShopLayout>
      <NextSeo title="Products" description="All Products from Next Shopify Storefront" />
      <ProductListSection data={props.data.productListSection} />
    </ShopLayout>
  );
}
