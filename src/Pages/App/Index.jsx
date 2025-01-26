
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import SignIn from '../SignIn/Index'
import './App.css'

function Index() {

  return (
    <div className='bg-red-100'>
      <Home />
      <MyOrder />
      <MyOrders />
      <MyAccount />
      <NotFound />
      <SignIn />
    </div>
  )
}

export default Index
