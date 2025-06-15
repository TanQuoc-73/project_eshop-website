import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import AuthModal from './AuthModal'
import CartModal from './CartModal'
import { Car, Search } from 'lucide-react';
import { FaShoppingCart } from "react-icons/fa";



export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black backdrop-blur z-50">
      <div className="flex items-center justify-between h-full px-20">
        <Link href="/" className="text-white font-bold text-3xl">
          {/* <Image
            src="/img/logo.png"
            alt="Logo"
            width={80}
            height={80}
          /> */}
          LOGO
        </Link>

        {/* Searchbar */}
        <div className='bg-gray-300 w-100 h-10 ml-40 rounded-lg border border-gray-200 flex items-center'>
          <div className="pl-3">
            <Search className="w-4 h-4 text-gray-900" />
          </div>
          
          <input
            type="text"
            placeholder="Search Laptop, PC, ..."
            className="flex-1 h-full px-3 outline-none text-sm text-black"
          />
          
          {/* Search Button */}
          <button className="bg-gray-900 text-white px-3 h-full rounded-lg hover:bg-black">
            Search
          </button>
        </div>

        <nav className="flex gap-8 text-white items-center">
          {/* Cart */}
          <div className=''>
            <CartModal/>
          </div>
          <AuthModal/>
        </nav>
      </div>
    </header>
  )
}
