import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import ItemsCard from './components/itemsCard'
import CartItems from './components/cartItems'
import Orders from './components/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <ItemsCard/>
    <SignIn/>
    <SignUp/>
    <CartItems/>
   
<Orders/>
 
    </>
  )
}

export default App
