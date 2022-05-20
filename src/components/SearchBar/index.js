import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export default function SearchBar() {
  const [ keyword, setKeyword ] = useState('')
  const navigate = useNavigate()

  const handleSubmit = event =>{
    event.preventDefault()
    if(keyword) navigate(`/search/${keyword}`)
  }

const handleChange = event => {
  setKeyword(event.target.value)
}

  return (
    <form className='search-bar-container' onSubmit={handleSubmit}>
      <button type='submit'>
      <FontAwesomeIcon icon={solid('magnifying-glass')} />
      </button>
      <input type='text' name='searchCountry' minLength={1} onChange={handleChange} placeholder='Search for a country...'  />
    </form>
  )
}