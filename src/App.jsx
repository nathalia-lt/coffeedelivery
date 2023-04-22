import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CiCoffeeCup, CiLocationOn } from 'react-icons/ci'
import {GiShoppingCart} from 'react-icons/gi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <header>
        <div className='headerLogo'>
       <CiCoffeeCup />
       <span>Coffee Delivery</span>
        </div>
        <div className='headerLocation'>
          < CiLocationOn />
          <span>New York</span>
        </div>
        <div className='headerCart'>
          <GiShoppingCart/>
          <span>0</span>
        </div>
      </header>
      <main>
        main section
      </main>
      <footer>
      it is a footer
      </footer>
    </>
  )
}

export default App
