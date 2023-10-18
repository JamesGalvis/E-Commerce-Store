'use client';

import usePreviewModal from '@/hooks/use-preview-modal';
import { Dialog, DialogContent } from './ui/dialog';
import Gallery from './gallery';
import Info from './info';

function PreviewModal() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }
  return (
    <Dialog open={previewModal.isOpen} onOpenChange={previewModal.onClose}>
      <DialogContent className="w-full max-w-3xl overflow-x-hidden rounded-xl text-left align-middle">
        <div className="grid grid-cols-1 sm:grid-cols-12 items-start w-full gap-x-6 lg:gap-x-8 gap-y-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PreviewModal;
