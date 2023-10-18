'use client';

import { Image as ImageType } from '@/types';
import GalleryTab from './gallery-tab';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

interface GalleryProps {
  images: ImageType[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="block w-full max-w-2xl lg:max-w-none mx-auto mt-6">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full rounded-lg overflow-hidden">
              <Image
                src={image.url}
                fill
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Gallery;
