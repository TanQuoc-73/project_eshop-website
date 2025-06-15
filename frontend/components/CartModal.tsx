import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {FaShoppingCart} from "react-icons/fa";

export default function CartModal(){
    return(
        <Popover>
            <PopoverTrigger asChild>
                <button className='text-xl text-white hover:bg-gray-800 hover:text-gray-100 p-2 rounded-full'>
                    <FaShoppingCart />
                </button>
            </PopoverTrigger>
            <PopoverContent className='bg-gray-900 text-white p-4 rounded-lg mt-5 w-80 shadow-lg'>
                <h2 className='text-lg font-bold mb-2'>Your Cart</h2>
                <p className='text-sm text-muted-foreground mb-4'>No items in your cart.</p>
                {/* Add cart items here */}
            </PopoverContent>
        </Popover>
    )
}