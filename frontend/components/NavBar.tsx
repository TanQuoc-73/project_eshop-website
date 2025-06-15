import Link from 'next/link'

export default function NavBar(){
    return (
        <div className='bg-gray-900 w-200 h-10 rounded-lg flex items-center justify-between'>
            <Link href='/products/pc' className='ml-10'>
                PC/Desktop
            </Link>
            <Link href='/products/laptop'>
                Laptop
            </Link>
            <Link href='/products/components'>
                Computer Components
            </Link>
            <Link href='/products/peripheral' className='mr-10'>
                Peripherals
            </Link>
        </div>
    )
}