import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('6c0880db-3ce5-4e96-919b-471aa38d08c6');
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard
          data={billboard}
          className="bg-neutral-800/30"
          textColor="text-neutral-100"
        />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
