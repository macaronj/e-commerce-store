import getBillboard from "@/actions/get-billboard";
import getBillboardDefault from "@/actions/get-billboard-default";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });
  const billboardDefault = await getBillboardDefault({ isDefault: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboardDefault} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
