import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link, useParams } from 'react-router-dom'
import './styles.css'

export default function FilterMenu() {
let params = useParams()

  function showRegions() {
    const checkbox = document.getElementById('checkbox')
    const regions = document.getElementById('regions')

    if(checkbox.checked){
      regions.style.setProperty('display', 'flex')
    } else {
      regions.style.setProperty('display', 'none')
    }
  }

  return(
    <div  className='filter-menu-container'>

        <label onClick={showRegions} className='filter-menu-placeholder' htmlFor='checkbox'>
        <div>
          Filter by Region
        </div>
        <input  type='checkbox' id='checkbox' />
        <FontAwesomeIcon className='filter-button' icon={solid('angle-down')} />
        </label>

        <ul className='regions' id='regions' >
          <li><Link className='region' to='/region/africa'>Africa</Link></li>
          <li><Link className='region' to='/region/america'>America</Link></li>
          <li><Link className='region' to='/region/asia'>Asia</Link></li>
          <li><Link className='region' to='/region/europe'>Europe</Link></li>
          <li><Link className='region' to='/region/oceania'>Oceania</Link></li>
        </ul>
    </div>
  )
}