import { Product } from '@/types';
import Image from 'next/image';
import React from 'react';
import IconButton from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';

interface ProductCardProps {
  data: Product;
}

function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="group bg-white cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="relative rounded-xl aspect-square bg-gray-100">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data.name}
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute w-full px-6 bottom-5 opacity-0 group-hover:opacity-100 transition">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
}

export default ProductCard;
