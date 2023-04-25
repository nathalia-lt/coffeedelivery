import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CiCoffeeCup, CiLocationOn, CiCoffeeBean} from 'react-icons/ci'
import {GiShoppingCart, GiAlarmClock} from 'react-icons/gi'
import {BsCreditCard} from 'react-icons/bs'

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
        <div className='mainTitle'>
        <h1>Find your perfect Coffee</h1>
        <p>Choose from the largest selection of coffee and have it delivery to your door</p>
        </div>
        
        <div className='mainBenefits'>
          <div className='benefitsIcon'>
            <div className='icon 1'>
          <BsCreditCard/>
            </div>
          <p>Safe and easy</p>
          </div>
          <div className='benefitsIcon'>
            <div className='icon 2'>
          <GiAlarmClock/>
            </div>
          <p>Five days of delivery delight</p>
          </div>
          <div className='benefitsIcon'>
            <div className='icon 3'>
          <CiCoffeeCup/>
            </div>
          <p>Thermal cup</p>
          </div >
          <div className='benefitsIcon'>
            <div className='icon 4'>
          <CiCoffeeBean/>
            </div>
          <p>Freshly made </p>
          </div>
        </div>
        <section>
          <div className='coffeeSelection'>
            <h2>Coffee menu</h2>
            <div className='coffeeOption'>
              <h2>Expresso</h2>
              <p>1oz espresso</p>
              <p>$ 4,00</p>
              <button> + 1 - </button>
              <button> <GiShoppingCart/> </button>
              <p> </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
      
      </footer>
    </>
  )
}

export default App
