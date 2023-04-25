import {CiCoffeeCup, CiLocationOn} from 'react-icons/ci'
import {GiShoppingCart} from 'react-icons/gi'


const Header = () => {
    return (<header>
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
      </header>)
}

export default Header