import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"
import { useContext } from 'react'

function MyOrder() {

  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder
