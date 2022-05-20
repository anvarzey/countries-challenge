import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card'
import FilterMenu from '../components/FilterMenu'
import SearchBar from '../components/SearchBar'
import GetCountries from '../services/GetCountries';

export default function Region() {
  const [ countries, setCountries ] = useState([])
  let params = useParams()

  useEffect(() => {
    GetCountries({keyword: params.regionName})
      .then(res => setCountries(res))
  }, [params])


  return (
    <>
     <div className='search-and-filter-container'>
      <SearchBar />
      <FilterMenu />
      </div>
    <div className='cards-container'>
          {
              countries.map(element =>
                <Card flag={element.flag} name={element.name} population={element.population} region={element.region} capital={element.capital} />
                )
          }
      </div>
      </>
  )
}