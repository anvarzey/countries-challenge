import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function Card( {name, population, region, capital, flag} ) {
const navigate = useNavigate()

const handleNavigation = () => {
  navigate(`/country/${name}`)
}

  return (
        <div onClick={handleNavigation} className='card'>
           <div className='card-image'>
            <img src={flag} className='flag' style={{'height': '140px'}} alt='flag' />
          </div>
          <div className='card-text'>
            <h4 className='country-name'>{name}</h4>
            <p><span className='weight-increased'>Population:</span> {population}</p>
            <p><span className='weight-increased'>Region:</span> {region}</p>
            <p><span className='weight-increased'>Capital:</span> {capital}</p>
          </div>
        </div>
  )
}