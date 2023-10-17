'use client';

import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

import Currency from './ui/currency';
import Button from './ui/button';

interface InfoProps {
  data: Product;
}

function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex items-end justify-between mt-3">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <p>{data.size.name}</p>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-4">
        <Button className="flex items-center gap-x-2 rounded-md">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Info;
