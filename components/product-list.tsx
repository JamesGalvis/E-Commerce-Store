'use client';

import { Product } from '@/types';
import NoResults from './ui/no-results';
import ProductCard from './ui/product-card';
import { useEffect, useState } from 'react';

interface ProductList {
  title: string;
  items: Product[];
}

function ProductList({ title, items }: ProductList) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
