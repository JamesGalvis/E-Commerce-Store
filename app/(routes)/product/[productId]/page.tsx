import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';

import Gallery from '@/components/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-x-8">
            <Gallery images={product.images} />
            <div className="px-4 sm:px-0 mt-10 sm:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
