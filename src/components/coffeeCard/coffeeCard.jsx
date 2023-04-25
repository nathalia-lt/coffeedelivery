import {GiShoppingCart} from 'react-icons/gi'


const CoffeeCard = ({coffee}) => {
    return (<div className='coffeeOption'>
    <h2>{coffee.name}</h2>
    <p>{coffee.description}</p>
    <p>{coffee.price}</p>
    <button> + 1 - </button>
    <button> <GiShoppingCart/> </button>
    <p> </p>
  </div>)
}

export default CoffeeCard