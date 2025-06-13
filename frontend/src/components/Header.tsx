import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gray-900/50 backdrop-blur z-50">
      <div className="flex items-center justify-between h-full px-20">
        <Link href="/" className="text-white font-bold text-xl">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>

        <nav className="flex gap-8 text-white items-center">
          <Link href="/news">News</Link>
          <Link href="/shops">Shop</Link>
          <Button variant="default">Sign In </Button>
        </nav>
      </div>
    </header>
  )
}
