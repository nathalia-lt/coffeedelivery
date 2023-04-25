
import './benefitIcon.css'

//componente funcional with an arrow function, return elementos do DOM
//todo componente inica com letra maiuscula
//recebem informacoes do element pai
//o que esta entre parentes e as informacoes que eu recebo do component pai
//props e um objeto que recebe todas as propriedades que o elemento pai estamandando

const BenefitIcon = ({icon, text}) =>{
    return (<div className='benefitsIcon'>
    <div className='icon 2'>
  {icon}
    </div>
  <p>{text}</p>
  </div>)
}




export default BenefitIcon
