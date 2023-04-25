import { useState } from 'react'
import './App.css'
import BenefitIcon from './components/benefitIcon/benefitIcon'
import {coffees} from   './data/coffees' 
import CoffeeCard from './components/coffeeCard/coffeeCard'
import { benefits } from './data/benefits'
import Header from './components/header/header'

//quando e export default nao preciso do curly brackets na hora de importar

function App() {

  return (
    <>
    {/* aqui eu chamo o component <Header/> */}
      <Header/>  
      <main>
        <div className='mainTitle'>
        <h1>Find your perfect Coffee</h1>
        <p>Choose from the largest selection of coffee and have it delivery to your door</p>
        </div>
        
        <section className='mainBenefits'>
                  {benefits.map(benefit => <BenefitIcon icon={benefit.icon} text={benefit.text} key={benefit.id} />)}
        </section>

        <section className='coffeeSelection'>
            <h2>Coffee menu</h2>
            <div className='coffeesContainer'>
            {coffees.map(coffee => <CoffeeCard coffee={coffee} key={coffee.id}/>)}
            </div>

        </section>
      </main>
      <footer>
      
      </footer>
    </>
  )
}

export default App


//quando eu tenho que repetir muito o mesmo html, eu crio um componente para ele.
//tambem quando o elemento se altera ao longo do uso do aplicativo, quando ele reage ao estado do aplicativo (exemplo o carrinho)