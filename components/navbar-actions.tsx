'use client';

import { useEffect, useState } from 'react';
import Button from './ui/button';
import { ShoppingBag } from 'lucide-react';

function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}

export default NavbarActions;
