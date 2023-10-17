import Button from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Color, Size } from '@/types';
import { Plus } from 'lucide-react';
import Filter from './filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

function MobileFilters({ colors, sizes }: MobileFiltersProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center gap-x-2 lg:hidden">
            Filters
            <Plus size={20} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileFilters;
