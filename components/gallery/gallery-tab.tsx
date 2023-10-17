'use client';

import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/types';
import { Tab } from '@headlessui/react';
import Image from 'next/image';

interface GalleryTabProps {
  image: ImageType;
}

function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab
      value={image.id}
      className="relative flex items-center justify-center rounded-md bg-white cursor-pointer aspect-square"
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              fill
              alt="Image"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-0',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
