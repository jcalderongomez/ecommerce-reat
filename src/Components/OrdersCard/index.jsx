import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props


    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg mb-4">
            <div className='flex justify-between w-full'>
                <p className=' flex flex-col'>
                    <span className='font-light'>01022003</span>
                    <span className='font-light'>{totalProducts}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>{totalPrice} articles</span>
                    <ChevronRightIcon className='h6 w-6 text-black cursor-pointer'></ChevronRightIcon>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard