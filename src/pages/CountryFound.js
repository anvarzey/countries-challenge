import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import FilterMenu from '../components/FilterMenu'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'

export default function CountryFound() {
  const [ result, setResult ] = useState([])
  const [ loading, setLoading ] = useState(false)
  let params = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
     .then(response => response.json())
     .then(json => json.map(country => {
      const { population, region, capital, name, flags, latlng } = country

      return {
        name: name.common,
        population: population,
        region: region,
        capital: capital,
        key: [...latlng],
        flag: flags.png
      }
  }))
  .then(res => {
    setResult(res)
    setLoading(false)
  })
  }, [params])

  if (loading) return  <Loader />

  return (
    <>
     <div className='search-and-filter-container'>
      <SearchBar />
      <FilterMenu />
      </div>
    <div className="cards-container">
      {
        result.map(element =>
          <Card key ={element.key} flag={element.flag} name={element.name} population={element.population} region={element.region} capital={element.capital} />
        )
      }
    </div>
    </>
  )
}