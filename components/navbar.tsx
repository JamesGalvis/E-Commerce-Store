import Link from 'next/link';

import getCategories from '@/actions/get-categories';

import Container from './ui/container';
import MainNav from './main-nav';
import NavbarActions from './navbar-actions';

async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
